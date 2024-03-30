const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
    env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'https://localhost:7167';

const PROXY_CONFIG = [
  {
    context: [
      "/WeatherForecast",
    ],
    target,
    secure: false
  },
  {
    "/api": {
      "target": "http://localhost:7167",
      "secure": false
    }

  }

]

module.exports = PROXY_CONFIG;
