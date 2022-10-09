const cryptosModel = require('../models/cryptos');




exports.getLandingPage = () => {
    cryptosModel.cargarCryptos()
    .then(result => {
        console.log(result);
    });

}

exports.getIndex = (req, res, next) => {
    Product.find()
      .then(products => {
        res.render('shop/index', {
          prods: products,
          pageTitle: 'Shop',
          path: '/'
        });
      })
      .catch(err => {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
      });
  };