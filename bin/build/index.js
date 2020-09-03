const runRollup = require('./run-rollup');
const del = require('del');
const chalk = require('chalk');

const create = () => {
  require('./create-manifest')();
  require('./create-icons')();
  require('./create-robots')();
  require('./create-basic-service-worker')();
};

async function run(silent = false) {
  const start = Date.now();
  try {
    await del('public');
    await runRollup();
    create();
    const time = Date.now() - start;

    !silent && console.log(chalk`
  {greenBright.bold Successful ${process.env.NODE_ENV} build}    {greenBright ${(time / 1000).toFixed(2)}s}
    `);
  } catch (err) {
    console.log(chalk`
  {red.bold !!! ERROR}
  ${err}
    `);
  }
}

module.exports = run;