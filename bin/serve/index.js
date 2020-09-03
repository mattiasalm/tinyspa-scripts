const express = require('express');
const path = require('path');
const chalk = require('chalk');
const watch = require('node-watch');
const runBuild = require('../build');
const port = process.env.PORT || 8080;
const app = express();

// serve static assets normally
app.use(express.static('public'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (_request, response) {
  response.sendFile(path.resolve('public/index.html'));
});

async function run() {
  console.log(chalk`
  {yellowBright Starting...}
  `);

  await runBuild();

  const watcher = watch('src', { recursive: true }, function (evt, name) {
    console.log(chalk`
    {blueBright ${evt}} {yellowBright ${name}}
    `);
    runBuild();
  });
  process.on('SIGINT', watcher.close);

  console.log(chalk`
  {greenBright Watching for file changes}
  `);

  app.listen(port);
  console.log(chalk`
  {yellowBright Server started
  http://localhost:${port}
  http://127.0.0.1:${port}}
`);
}

run();