const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create the scripts directory if it doesn't exist
if (!fs.existsSync('scripts')) {
  fs.mkdirSync('scripts');
}

console.log('Generating icons...');

// Check if ImageMagick is installed
try {
  execSync('which convert');
  console.log('ImageMagick is installed.');
} catch (error) {
  console.error('ImageMagick is not installed. Please install it to generate icons.');
  console.error('On macOS: brew install imagemagick');
  console.error('On Ubuntu: sudo apt-get install imagemagick');
  process.exit(1);
}

// Generate the icons
const sizes = [192, 512];
const svgPath = path.join(__dirname, '../public/icons/myfc-icon.svg');
const outputDir = path.join(__dirname, '../public/icons');

sizes.forEach(size => {
  const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);
  console.log(`Generating ${outputPath}...`);
  
  try {
    execSync(`convert -background none -size ${size}x${size} ${svgPath} ${outputPath}`);
    console.log(`Generated ${outputPath}`);
  } catch (error) {
    console.error(`Error generating ${outputPath}:`, error.message);
  }
});

console.log('Icon generation complete!'); 