const staticFile = require('../appModules/http-utils/static-file');
const { getData, endpoints } = require('../appModules/api');
const { config, makeRatingFile } = require('../appModules/rating');

const mainRouterController = async (res, publicUrl, extname) => {
  const data = await getData(endpoints.games);
  await makeRatingFile(config.PATH_TO_RATING_FILE, data);
  res.statusCode = 200;
  staticFile(res, '/index.html', '.html');
};

module.exports = mainRouterController;
