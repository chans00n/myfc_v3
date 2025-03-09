const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

console.log('Generating icons...');

// Generate the icons
const sizes = [192, 512];
const svgPath = path.join(__dirname, '../public/icons/myfc-icon.svg');
const outputDir = path.join(__dirname, '../public/icons');

// Read the SVG file
const svgBuffer = fs.readFileSync(svgPath);

// Generate PNG files for each size
sizes.forEach(size => {
  const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);
  console.log(`Generating ${outputPath}...`);
  
  sharp(svgBuffer)
    .resize(size, size)
    .png()
    .toFile(outputPath)
    .then(() => {
      console.log(`Generated ${outputPath}`);
    })
    .catch(err => {
      console.error(`Error generating ${outputPath}:`, err);
    });
});

console.log('Icon generation started. Check the output for completion status.'); 