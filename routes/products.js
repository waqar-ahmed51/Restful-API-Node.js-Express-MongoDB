//Import ExpressJS
const express = require("express");
//Imoort Router from Express
const router = express.Router();
//Product Schama for MongoDB
const Product = require('../models/Product');

// Getting all the Products
router.get('/', async (req, res) => {
    // res.send("Product Page - Shows JSON");
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.json({ messge: error })
    }
});

//Submitting a Product
router.post('/', async (req, res) => {
    const product = new Product({
        id: req.body.id,
        title: req.body.title,
        desc: req.body.desc,
        img: req.body.img,
        price: req.body.price,
        priceQuantity: req.body.priceQuantity,
        quantity: req.body.quantity,
        category: req.body.category,
        popular: req.body.popular,
        "Main Features": req.body["Main Features"],
    });
    try {
        const submitProduct = await product.save();
        res.json(submitProduct);
    } catch (error) {
        res.json({ messge: error })
    }
});

//Get Single Product
router.get('/:productId', async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
    } catch (error) {
        res.json({ messge: error })
    }
});

// Delete a Product
router.delete('/:productId', async (req, res) => {
    try {
        const deleteProduct = await Product.remove({ _id: req.params.productId });
        res.json(deleteProduct);
    } catch (error) {
        res.json({ messge: error })
    }
});

// Update a Product
router.patch('/:productId', async (req, res) => {
    try {
        const updateProduct = await Product.updateOne({ _id: req.params.productId }, { $set: { title: req.body.title } });
        res.json(updateProduct);
    } catch (error) {
        res.json({ messge: error })
    }
});
module.exports = router;