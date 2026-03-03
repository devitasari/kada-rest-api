const { Product } = require('../models')

const ProductController = {
    find: (req, res, next) => {
        Product.find()
        .then(products => {
            res.json(products)
        })
        .catch(err => {
            next(err)
        })
    },
    findById: (req, res, next) => {
        Product.findById(req.params.id)
        .then(product => {
            res.json(product)
        })
        .catch(err => {
            next(err)
        })
    },
    create: (req, res, next) => {
        let { name, description, price, stock, image_url } = req.body

        price = Number(price)
        stock = Number(stock)

        if (!name || !description || !price || !stock) {
            new Error('All fields are required')
        }

        let userId = req.userId
        console.log(userId, '>>>>')

        Product.create({name, description, price, stock, image_url, userId})
        .then(product => {
            res.json(product)
        })
        .catch(err => {
            next(err)
        })
    },
    update: (req, res, next) => { 
        let { name, description, price, stock, image_url } = req.body

        price = Number(price)
        stock = Number(stock)

        if (!name || !description || !price || !stock) {
            new Error('All fields are required')
        }

        Product.findByIdAndUpdate(req.params.id, {name, description, price, stock, image_url}, { new: true })
        .then(product => {
            console.log('masuk====')
            res.json(product)
        })
        .catch(err => {
            console.log('masuk error====')

            next(err)
        })
    },
    delete: (req, res, next) => {
        Product.delete(req.params.id)
        .then(() => {
            res.json({ message: `Product with id ${req.params.id} has been deleted`})
            })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = ProductController

