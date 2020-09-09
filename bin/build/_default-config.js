module.exports = {
  name: 'tinyspa',
  shortName: 'tinyspa',
  description: 'site description',
  iconSizes: [72, 96, 128, 144, 152, 167, 180, 192, 384, 512],
  iconPath: 'images/icons',
  iconTextColor: '#fff',
  iconTextFont: 'Courier New',
  startUrl: '/',
  display: 'standalone',
  backgroundColor: '#000',
  themeColor: '#fff',
  contentPrefetch: 'content',
  splashScreenSizes: [
    [375, 812, 3], // width, height, pixel-ratio
    [375, 667, 2],
    [414, 736, 3],
    [320, 568, 2],
    [768, 1024, 2],
    [834, 1112, 2],
    [1024, 1366, 2],
  ]
};
