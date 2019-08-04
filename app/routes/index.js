'use strict';
const h = require('../helpers');

module.exports = () => {
  let routes = {
    'get': {
      '/': (req, res, next) => {
        res.render('login');
      },
      '/product/create': (req, res, next) => {
        res.render('product');
      },
      '/product/get': (req, res, next) => {
        res.render('product');
      },
      '/product/search': (req, res, next) => {
        res.render('product');
      }
    },
    'post': {
      '/product/create': (req, res, next) => {
        res.render('product');
      },
      '/product/update': (req, res, next) => {
        res.render('product');
      }
    },
    'NA': (req, res, next) => {
      res.status(404).sendFile(process.cwd() + '/views/404.htm');
    }
  }

  return h.route(routes);

}
