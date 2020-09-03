#!/usr/bin/env node

const chalk = require('chalk');
const [, , ...args] = process.argv;
const { version } = require('../package.json');

process.env.NODE_ENV = 'production';

switch (args[0]) {
  case 'build':
    require('./build')();
    break;

  case 'build-dev':
    process.env.NODE_ENV = 'development';
    require('./build')();
    break;

  case 'serve':
    process.env.NODE_ENV = 'development';
    require('./serve');
    break;

  case 'serve-prod':
    require('./serve');
    break;

  case 'version':
    console.log(chalk`
  {greenBright.bold tinyspa-scripts v${version}}
    `);
    break;

  default:
    console.log(chalk`
  {yellowBright.bold USAGE}
    {greenBright tinyspa-scripts [command]}

  {yellowBright.bold AVAILABLE COMMANDS}
    {blueBright build}
    {blueBright build-dev}
    {blueBright serve}
    {blueBright serve-prod}
    {blueBright version}
    `);
}   
