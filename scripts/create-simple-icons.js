const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

console.log('Creating simple PNG icons...');

const iconsDir = path.join(__dirname, '../public/icons');
const sizes = [192, 384, 512];

// Create a simple SVG with text
const createSvg = (size) => {
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" fill="black"/>
      <text x="50%" y="50%" font-family="Arial" font-size="${size/5}" fill="white" text-anchor="middle" dominant-baseline="middle">MYFC</text>
    </svg>
  `;
};

// Create each size
sizes.forEach(size => {
  const outputPath = path.join(iconsDir, `icon-${size}x${size}.png`);
  console.log(`Creating ${size}x${size} icon at ${outputPath}...`);
  
  const svgBuffer = Buffer.from(createSvg(size));
  
  sharp(svgBuffer)
    .png()
    .toFile(outputPath)
    .then(info => {
      console.log(`✅ Created ${size}x${size} icon (${info.width}x${info.height}, ${(info.size / 1024).toFixed(2)} KB)`);
    })
    .catch(err => {
      console.error(`❌ Error creating ${size}x${size} icon: ${err.message}`);
    });
});

console.log('\nIcon creation started. Check the output for completion status.');
console.log('After the icons are created, commit and push them to GitHub.'); 