const conf = require('./gulp.conf');

const proxyMiddleware = require('http-proxy-middleware');

module.exports = function () {
  return {
    server: {
      middleware: proxyMiddleware('/api', 
      {
        target: 'http://192.168.2.212:8080/',
        pathRewrite: {'^/api': '/'}
      }),
      baseDir: [
        conf.paths.tmp,
        conf.paths.src
      ]
    },
    open: false
  };
};
