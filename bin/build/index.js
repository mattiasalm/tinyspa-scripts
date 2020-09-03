const { exec } = require('child_process');
const {series} = require('async');

const createManifest = require('./create-manifest');
const createIcons = require('./create-icons');
const createRobots = require('./create-robots');
const createBasicServiceWorker = require('./create-basic-service-worker');

const create = () => {
  createManifest();
  createIcons();
  createRobots();
  createBasicServiceWorker();
};

exec('./node_modules/.bin/rollup -c', (err, stdout, stderr) => {
  console.log(stdout);
  console.log(stderr);
});