#!/usr/bin/env node

const [, , ...args] = process.argv;

switch (args[0]) {
  case 'build':
    console.log('build');
    require('./build');
    break;
  default:
    console.log('Available commands: build');
}   
