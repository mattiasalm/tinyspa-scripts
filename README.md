# tinyspa-scripts

Package containing scripts to build and serve a site based on [@tinyspa/core](https://github.com/mattiasalm/tinyspa-core).

Configuration file `app.config.js` can be included in `/src` folder to override defaults.

---

**default config**

```javascript
module.exports = {
  name: 'tinyspa',
  description: 'tinyspa site',
  iconSizes: [72, 96, 128, 144, 152, 192, 384, 512],
  iconPath: 'images/icons',
  iconTextColor: '#fff',
  iconTextFont: 'Courier New',
  startUrl: '/',
  display: 'standalone',
  backgroundColor: '#66EDA8',
  themeColor: '#66EDA8',
  contentPrefetch: 'content'
};
```

| Key             | Comment                                                       |
| --------------- | ------------------------------------------------------------- |
| name            | App name                                                      |
| description     | App description                                               |
| iconSizes       | Icon sizes to generate                                        |
| iconPath        | Path to where icons should be stored                          |
| iconTextColor   | Icon text color                                               |
| iconTextFont    | Icon text font                                                |
| startUrl        | Start url for app                                             |
| display         | Display property for app                                      |
| backgroundColor | Background color for app. Also used as icon background color. |
| themeColor      | App theme color                                               |
