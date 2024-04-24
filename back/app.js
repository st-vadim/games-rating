const http = require('http');
const path = require('path');
const mimeTypes = require('./appModules/http-utils/mine-types');

const staticFile = require('./appModules/http-utils/static-file');
const mainRouterController = require('./controllers/main');
const defaultRouteController = require('./controllers/default');
const gameRouteController = require('./controllers/game');
const voteRouteController = require('./controllers/vote');

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case '/':
      mainRouterController(res, './index.html', '.html');
      break;

    case '/game':
      gameRouteController(res);
      break;

    case '/vote':
      voteRouteController(req, res);
      break;

    default:
      defaultRouteController(res, url);
  }
});

server.listen(3005);
