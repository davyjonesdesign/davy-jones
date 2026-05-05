#!/usr/bin/env node
const { spawnSync } = require('child_process');

if (process.env.SKIP_PRERENDER === '1') {
  console.log('[prerender] SKIP_PRERENDER=1, skipping react-snap.');
  process.exit(0);
}

const cmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const result = spawnSync(cmd, ['react-snap'], { stdio: 'inherit' });

if (result.status !== 0) {
  console.warn('[prerender] react-snap failed or is unavailable in this environment; serving CSR build only.');
}

process.exit(0);
