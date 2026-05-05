#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const http = require('http');
const handler = require('serve-handler');
const puppeteer = require('puppeteer');

if (process.env.SKIP_PRERENDER === '1') {
  console.log('[prerender] SKIP_PRERENDER=1, skipping prerender.');
  process.exit(0);
}

const BUILD_DIR = path.join(__dirname, '..', 'build');
const PORT = 45678;
const BASE_URL = `http://localhost:${PORT}`;

const ROUTES = [
  '/',
  '/about',
  '/work',
  '/contact',
  '/work/budgety',
  '/work/fleet-redeployment',
  '/work/streamline-app',
  '/work/wiki-ui',
  '/work/wheels',
  '/work/written-in-stone',
];

async function prerender() {
  // Serve the build directory
  const server = http.createServer((req, res) =>
    handler(req, res, { public: BUILD_DIR, rewrites: [{ source: '**', destination: '/index.html' }] })
  );
  await new Promise((resolve, reject) => {
    server.listen(PORT, (err) => (err ? reject(err) : resolve()));
  });

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      // Suppress console noise from the page
      page.on('console', () => {});
      page.on('pageerror', () => {});

      await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });

      // Wait for React to mount
      await page.waitForFunction(() => document.getElementById('root')?.children.length > 0, { timeout: 10000 });

      const html = await page.content();
      await page.close();

      // Determine output path (/ → index.html, /foo → /foo/index.html)
      const outDir = path.join(BUILD_DIR, route === '/' ? '' : route);
      fs.mkdirSync(outDir, { recursive: true });
      const outFile = path.join(outDir, 'index.html');
      fs.writeFileSync(outFile, html, 'utf-8');
      console.log(`[prerender] ✓ ${route}`);
    }

    // Write 200.html as a copy of index for SPA fallback (e.g. Surge.sh)
    fs.copyFileSync(path.join(BUILD_DIR, 'index.html'), path.join(BUILD_DIR, '200.html'));
    console.log('[prerender] Done.');
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch((err) => {
  console.warn('[prerender] Prerender failed; serving CSR build only.');
  console.warn(err.message);
  process.exit(0);
});
