const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const publicDir = path.join(__dirname, '../public/images');
  
  try {
    // Optimize the main logo
    const logoPath = path.join(publicDir, 'logo-lci-full.png');
    
    if (fs.existsSync(logoPath)) {
      console.log('Optimizing logo...');
      
      // Create optimized versions with higher resolution for better clarity
      await sharp(logoPath)
        .resize(150, 150, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png({ quality: 90, compressionLevel: 8 })
        .toFile(path.join(publicDir, 'logo-lci-150.png'));
      
      await sharp(logoPath)
        .resize(110, 110, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png({ quality: 90, compressionLevel: 8 })
        .toFile(path.join(publicDir, 'logo-lci-110.png'));
      
      await sharp(logoPath)
        .resize(170, 170, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png({ quality: 90, compressionLevel: 8 })
        .toFile(path.join(publicDir, 'logo-lci-170.png'));
      
      // Create WebP versions for better compression
      await sharp(logoPath)
        .resize(150, 150, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .webp({ quality: 90 })
        .toFile(path.join(publicDir, 'logo-lci-150.webp'));
      
      await sharp(logoPath)
        .resize(110, 110, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .webp({ quality: 90 })
        .toFile(path.join(publicDir, 'logo-lci-110.webp'));
      
      await sharp(logoPath)
        .resize(170, 170, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .webp({ quality: 90 })
        .toFile(path.join(publicDir, 'logo-lci-170.webp'));
      
      console.log('Logo optimization completed!');
    } else {
      console.log('Logo file not found');
    }
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages(); 