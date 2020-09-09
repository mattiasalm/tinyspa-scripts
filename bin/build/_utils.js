const fs = require('fs');
const { resolve } = require('path');

const customConfigSrc = resolve('src/app.config.js');
const config = {
  ...require('./_default-config'),
  ...(fs.existsSync(customConfigSrc) && require(customConfigSrc))
};
if (!config.iconSizes.includes(152)) {
  config.iconSizes = [...config.iconSizes, 152];
}
if (!config.iconSizes.includes(167)) {
  config.iconSizes = [...config.iconSizes, 167];
}
if (!config.iconSizes.includes(180)) {
  config.iconSizes = [...config.iconSizes, 180];
}
if (!config.iconSizes.includes(192)) {
  config.iconSizes = [...config.iconSizes, 192];
}

module.exports = {
  createDir: dir => {
    const fs = require('fs');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  },
  iconName: size => `${config.iconPath}/icon-${size}x${size}.png`,
  splashName: (width, height) => `${config.iconPath}/splash-${width}x${height}.png`,
  config,
  developmentMode: process.env.NODE_ENV === 'development',
  outputFileName: process.env.NODE_ENV === 'development' ? 'main' : 'main.min',
  resolvePublicPath: (path = '') => resolve(`public/${path}`),
  resolveSrcPath: (path = '') => resolve(`src/${path}`),
};
