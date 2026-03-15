const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 图片目录
const imageDir = path.join(__dirname, '../public/images');

// 获取所有PNG图片
const pngFiles = fs.readdirSync(imageDir)
  .filter(file => file.endsWith('.png') && !file.includes('svg') && fs.statSync(path.join(imageDir, file)).isFile());

console.log(`Found ${pngFiles.length} PNG files to compress`);

// 压缩选项
const compressBackgroundImage = async (inputFile, outputFile) => {
  await sharp(inputFile)
    .resize({ width: 1920, withoutEnlargement: true }) // 限制最大宽度
    .webp({ quality: 75 }) // 转换为WebP格式，质量75%
    .toFile(outputFile);
};

const compressSmallImage = async (inputFile, outputFile) => {
  await sharp(inputFile)
    .webp({ quality: 85 }) // 对小图使用更高的质量
    .toFile(outputFile);
};

// 处理所有图片
async function processImages() {
  for (const file of pngFiles) {
    const inputPath = path.join(imageDir, file);
    const stats = fs.statSync(inputPath);
    const fileSizeInMB = stats.size / (1024 * 1024);
    const outputPath = path.join(imageDir, file.replace('.png', '.webp'));
    
    console.log(`Processing ${file} (${fileSizeInMB.toFixed(2)} MB)`);
    
    try {
      if (fileSizeInMB > 1) {
        // 大图片压缩率更高
        await compressBackgroundImage(inputPath, outputPath);
      } else {
        // 小图片保持较高质量
        await compressSmallImage(inputPath, outputPath);
      }
      
      // 获取压缩后的文件大小
      const newStats = fs.statSync(outputPath);
      const newFileSizeInMB = newStats.size / (1024 * 1024);
      const savingsPercent = ((stats.size - newStats.size) / stats.size * 100).toFixed(2);
      
      console.log(`Compressed ${file} to ${newFileSizeInMB.toFixed(2)} MB (saved ${savingsPercent}%)`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
}

processImages().then(() => {
  console.log('All images have been compressed');
}); 