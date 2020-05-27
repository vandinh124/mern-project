const {Product} = require('../models/product.model')


module.exports.createProduct = (req, res) => {
    Product.create(req.body)
      .then(createdProduct => res.json(createdProduct))
      .catch(err => res.status(400).json(err))
  }

module.exports.getAll = (_req,res) => {
    Product.find({}).sort({name:1})
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

module.exports.getOne = (req, res) => {
    Product.findById(req.params.id)
      .then(product => res.json(product))
      .catch(err => res.json(err));
  }

  module.exports.delete = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
      .then(() => res.json({ status: 'success' }))
      .catch(err => res.json(err));
  }
