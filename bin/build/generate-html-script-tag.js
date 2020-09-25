const { outputFileName } = require('./_utils');

module.exports = () => `<script defer src="${outputFileName}.js"></script></body>`;
