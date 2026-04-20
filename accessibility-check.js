/**
 * WCAG 2.1 Contrast Ratio Checker
 * Validates color combinations against accessibility standards
 */

// Convert hex to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Calculate relative luminance
function getLuminance(rgb) {
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
    val = val / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Calculate contrast ratio
function getContrastRatio(color1, color2) {
  const lum1 = getLuminance(hexToRgb(color1));
  const lum2 = getLuminance(hexToRgb(color2));
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return ((lighter + 0.05) / (darker + 0.05)).toFixed(2);
}

// Check if ratio meets WCAG standards
function checkWCAG(ratio) {
  const numRatio = parseFloat(ratio);
  return {
    AAA_normal: numRatio >= 7,
    AAA_large: numRatio >= 4.5,
    AA_normal: numRatio >= 4.5,
    AA_large: numRatio >= 3,
    passes: numRatio >= 4.5
  };
}

// Light Mode Colors
const lightMode = {
  background: '#ffffff',
  backgroundSecondary: '#f9fafb',
  backgroundTertiary: '#f3f4f6',
  textPrimary: '#111827',
  textSecondary: '#374151',
  textTertiary: '#6b7280',
  border: '#e5e7eb',
  accent: '#2563eb',
  hoverBackground: '#f3f4f6',
  activeBackground: '#eff6ff',
  focusOutline: '#2563eb',
  buttonPrimaryBg: '#111827',
  buttonPrimaryText: '#ffffff',
  buttonPrimaryHover: '#2563eb',
  buttonSecondaryBorder: '#111827'
};

// Dark Mode Colors
const darkMode = {
  background: '#111827',
  backgroundSecondary: '#1f2937',
  backgroundTertiary: '#374151',
  textPrimary: '#f9fafb',
  textSecondary: '#d1d5db',
  textTertiary: '#9ca3af',
  border: '#6b7280',
  accent: '#93c5fd',
  hoverBackground: '#374151',
  activeBackground: '#1e3a8a',
  focusOutline: '#93c5fd',
  buttonPrimaryBg: '#f9fafb',
  buttonPrimaryText: '#111827',
  buttonPrimaryHover: '#93c5fd',
  buttonSecondaryBorder: '#f9fafb'
};

// High Contrast Mode Colors
const highContrastMode = {
  background: '#ffffff',
  backgroundSecondary: '#ffffff',
  backgroundTertiary: '#ffffff',
  textPrimary: '#000000',
  textSecondary: '#000000',
  textTertiary: '#000000',
  border: '#000000',
  accent: '#0000ee',
  hoverBackground: '#ffffff',
  activeBackground: '#ffffff',
  focusOutline: '#0000ee',
  buttonPrimaryBg: '#0000ee',
  buttonPrimaryText: '#ffffff',
  buttonPrimaryHover: '#0000ee',
  buttonSecondaryBorder: '#000000'
};

function runChecks(mode, colors, modeName) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`${modeName} MODE - CONTRAST RATIO CHECK`);
  console.log(`${'='.repeat(60)}\n`);

  const checks = [
    {
      name: 'Body Text (Primary)',
      fg: colors.textPrimary,
      bg: colors.background,
      type: 'normal text'
    },
    {
      name: 'Body Text (Secondary)',
      fg: colors.textSecondary,
      bg: colors.background,
      type: 'normal text'
    },
    {
      name: 'Secondary Text on Secondary BG',
      fg: colors.textSecondary,
      bg: colors.backgroundSecondary,
      type: 'normal text'
    },
    {
      name: 'Tertiary Text on Primary BG',
      fg: colors.textTertiary,
      bg: colors.background,
      type: 'normal text'
    },
    {
      name: 'Navigation Links',
      fg: colors.textSecondary,
      bg: colors.background,
      type: 'normal text'
    },
    {
      name: 'Navigation Link on Hover',
      fg: colors.accent,
      bg: colors.hoverBackground,
      type: 'normal text'
    },
    {
      name: 'Active Nav Link',
      fg: colors.accent,
      bg: colors.activeBackground,
      type: 'normal text'
    },
    {
      name: 'Primary Button Text',
      fg: colors.buttonPrimaryText,
      bg: colors.buttonPrimaryBg,
      type: 'normal text'
    },
    {
      name: 'Primary Button Hover',
      fg: colors.buttonPrimaryText,
      bg: colors.buttonPrimaryHover,
      type: 'normal text'
    },
    {
      name: 'Accent Color (Links/Icons)',
      fg: colors.accent,
      bg: colors.background,
      type: 'large icon/link'
    },
    {
      name: 'Focus Outline',
      fg: colors.focusOutline,
      bg: colors.background,
      type: 'focus indicator'
    },
    {
      name: 'Border on Primary BG',
      fg: colors.border,
      bg: colors.background,
      type: 'graphical element'
    },
    {
      name: 'Tertiary Text on Secondary BG',
      fg: colors.textTertiary,
      bg: colors.backgroundSecondary,
      type: 'normal text'
    },
    {
      name: 'Contact Link Subtext (hardcoded)',
      fg: '#6b7280',
      bg: colors.background,
      type: 'normal text'
    },
    {
      name: 'Contact Link Subtext on Hover',
      fg: '#6b7280',
      bg: colors.hoverBackground,
      type: 'normal text'
    }
  ];

  const results = [];

  checks.forEach(check => {
    const ratio = getContrastRatio(check.fg, check.bg);
    const wcag = checkWCAG(ratio);
    
    let status = '❌ FAIL';
    if (wcag.AA_normal) status = '✅ PASS AA';
    if (wcag.AAA_normal) status = '✅ PASS AAA';
    if (wcag.AA_large && !wcag.AA_normal) status = '⚠️  PASS (large only)';

    results.push({
      name: check.name,
      ratio,
      status,
      fg: check.fg,
      bg: check.bg,
      type: check.type,
      wcag
    });

    console.log(`${status.padEnd(20)} ${check.name}`);
    console.log(`   Ratio: ${ratio}:1 (${check.type})`);
    console.log(`   FG: ${check.fg} | BG: ${check.bg}`);
    if (!wcag.AA_normal && wcag.AA_large) {
      console.log(`   ℹ️  Acceptable for large text only (18pt+ or 14pt+ bold)`);
    }
    console.log();
  });

  // Summary
  const passed = results.filter(r => r.wcag.AA_normal).length;
  const failed = results.filter(r => !r.wcag.AA_normal && !r.wcag.AA_large).length;
  const largeOnly = results.filter(r => r.wcag.AA_large && !r.wcag.AA_normal).length;

  console.log(`${'-'.repeat(60)}`);
  console.log(`SUMMARY: ${passed}/${results.length} passed AA for normal text`);
  console.log(`         ${largeOnly} acceptable for large text only`);
  if (failed > 0) {
    console.log(`         ${failed} FAILED`);
    console.log(`\n⚠️  FAILED COMBINATIONS:`);
    results.filter(r => !r.wcag.AA_normal && !r.wcag.AA_large).forEach(r => {
      console.log(`   - ${r.name}: ${r.ratio}:1 (needs ${(4.5).toFixed(2)}:1)`);
    });
  }
}

// Run all checks
runChecks('LIGHT', lightMode, 'LIGHT');
runChecks('DARK', darkMode, 'DARK');
runChecks('HIGH CONTRAST', highContrastMode, 'HIGH CONTRAST');

console.log(`\n${'='.repeat(60)}`);
console.log('WCAG 2.1 STANDARDS');
console.log(`${'='.repeat(60)}`);
console.log('AA (minimum compliance):');
console.log('  - Normal text: 4.5:1');
console.log('  - Large text (18pt+ or 14pt+ bold): 3:1');
console.log('\nAAA (enhanced compliance):');
console.log('  - Normal text: 7:1');
console.log('  - Large text (18pt+ or 14pt+ bold): 4.5:1');
console.log(`${'='.repeat(60)}\n`);
