const { createCanvas } = require('canvas');
const fs = require('fs');
const { splashName, createDir, config, resolvePublicPath } = require('./_utils');

const createSplashScreen = (width, height) => {
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');
  context.fillStyle = config.backgroundColor;
  context.fillRect(0, 0, width, height)

  const text = config.name.substr(0, 1).toUpperCase();
  context.font = `${Math.min(width, height) * 0.85}px ${config.iconTextFont}`;
  context.textBaseline = 'middle';
  context.textAlign = 'center';
  context.fillStyle = config.iconTextColor;
  context.fillText(text, width / 2, height / 2);

  return canvas.toBuffer();
}

module.exports = () => {
  const path = resolvePublicPath(config.iconPath);
  createDir(path);
  config.splashScreenSizes.forEach(([width, height, pixelRatio]) => {
    fs.writeFileSync(resolvePublicPath(splashName(width * pixelRatio, height * pixelRatio)), createSplashScreen(width * pixelRatio, height * pixelRatio));
  });
}
