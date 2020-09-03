const { exec } = require('child_process');

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

exec('rm -rf public && ./node_modules/.bin/rollup -c node_modules/@tinyspa/scripts/rollup.config.js', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  create();
});