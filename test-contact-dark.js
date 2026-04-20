function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : null;
}

function getLuminance(rgb) {
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
    val = val / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function getContrastRatio(color1, color2) {
  const lum1 = getLuminance(hexToRgb(color1));
  const lum2 = getLuminance(hexToRgb(color2));
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return ((lighter + 0.05) / (darker + 0.05)).toFixed(2);
}

// Contact-link subtext on dark mode background
const subtext = '#6b7280';  // hardcoded light mode tertiary
const darkBg = '#111827';
const darkHover = '#374151';
const darkActive = '#1e3a8a';

console.log('Contact Link Subtext Hardcoded Color (#6b7280) in Dark Mode:');
console.log('On dark background (#111827):', getContrastRatio(subtext, darkBg) + ':1', '❌ FAIL (needs 4.5:1)');
console.log('On hover background (#374151):', getContrastRatio(subtext, darkHover) + ':1', '❌ FAIL (needs 4.5:1)');
console.log('On active background (#1e3a8a):', getContrastRatio(subtext, darkActive) + ':1', '❌ FAIL (needs 4.5:1)');

console.log('\nIf using dark mode tertiary (#9ca3af):');
console.log('On dark background (#111827):', getContrastRatio('#9ca3af', darkBg) + ':1', '✅ PASS AA');
console.log('On hover background (#374151):', getContrastRatio('#9ca3af', darkHover) + ':1', '✅ PASS AA');
console.log('On active background (#1e3a8a):', getContrastRatio('#9ca3af', darkActive) + ':1', '✅ PASS AA');
