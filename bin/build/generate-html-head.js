const fs = require('fs');
const { config, outputFileName, splashName } = require('./_utils');

const generateSplashTags = () => config.splashScreenSizes
  .map(([width, height, pixelRatio]) => `<link rel="apple-touch-startup-image" media="(device-width: ${width}px) and (device-height: ${height}px) and (-webkit-device-pixel-ratio: ${pixelRatio})" href="${splashName(width * pixelRatio, height * pixelRatio)}" />`).reduce((acc, curr) => `${acc}${curr}\n`, '');

module.exports = () => `
  <head>
    <title>${config.name}</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="description" content="${config.description}" />
    <meta name="theme-color" content="${config.themeColor}" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content="${config.name}" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <link rel="icon" type="image/png" sizes="32x32" href="${config.iconPath}/favicon-32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="${config.iconPath}/favicon-16.png" />
    <link rel="apple-touch-icon" type="image/png" sizes="152x152" href="${config.iconPath}/icon-152x152.png" />
    <link rel="apple-touch-icon" type="image/png" sizes="167x167" href="${config.iconPath}/icon-167x167.png" />
    <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="${config.iconPath}/icon-180x180.png" />
    ${generateSplashTags()}
    <link rel="manifest" href="manifest.webmanifest" />
    <link rel="preconnect" href="https://storage.googleapis.com" />
    <link rel="stylesheet" href="${outputFileName}.css" />
`;
