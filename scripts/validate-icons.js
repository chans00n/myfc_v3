const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

console.log('Validating icon files...');

const iconFiles = [
  'icon-192x192.png',
  'icon-384x384.png',
  'icon-512x512.png'
];

const iconsDir = path.join(__dirname, '../public/icons');

iconFiles.forEach(async (filename) => {
  const filePath = path.join(iconsDir, filename);
  
  try {
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error(`❌ ${filename} does not exist at ${filePath}`);
      return;
    }
    
    // Check file size
    const stats = fs.statSync(filePath);
    console.log(`📁 ${filename}: ${(stats.size / 1024).toFixed(2)} KB`);
    
    // Validate PNG using sharp
    try {
      const metadata = await sharp(filePath).metadata();
      console.log(`✅ ${filename} is a valid ${metadata.format} image (${metadata.width}x${metadata.height})`);
    } catch (err) {
      console.error(`❌ ${filename} is not a valid image: ${err.message}`);
    }
  } catch (err) {
    console.error(`❌ Error checking ${filename}: ${err.message}`);
  }
});

console.log('\nValidation complete. If all icons show as valid, they should work in the manifest.');
console.log('If you still have issues, try:');
console.log('1. Regenerating the icons with a different tool');
console.log('2. Checking if Vercel is correctly serving the files');
console.log('3. Clearing your browser cache'); 