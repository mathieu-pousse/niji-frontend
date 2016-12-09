const conf = require('./gulp.conf');

const proxyMiddleware = require('http-proxy-middleware');

module.exports = function () {
  return {
    server: {
      middleware: proxyMiddleware('/api',
      {
        secure: false,
        target: 'https://localhost:8443/backoffice/api',
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
