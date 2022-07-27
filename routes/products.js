//Import ExpressJS
const express = require("express");
//Imoort Router from Express
const router = express.Router();
//Post Schama for MongoDB
const Product = require('../models/Product');

// Getting all the Products
router.get('/', async (req, res)=>{
    try {
        const products= await await Product.find();
        res.json(products);
    } catch (error) {
        res.json({messge: error})
    }
});

//Submitting a Product
router.post('/', async (req,res)=>{
    const product = new Product({
        // title: req.body.title,
        // description: req.body.description
    });
    try {
        const submitProduct = await product.save();
        res.json(submitProduct);    
    } catch (eerrorrr) {
        res.json({messge: error})
    }
});

//Get Single Product
router.get('/:productId', async (req,res)=>{
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
    } catch (error) {
        res.json({messge: error})
    }
});

// Delete a Product
router.delete('/:productId', async (req,res)=>{
    try {
        const deleteProduct = await Post.remove({_id:req.params.productId});
        res.json(deleteProduct);
    } catch (error) {
        res.json({messge: error})
    }
});

// Update a Product
router.patch('/:productId', async (req,res)=>{
    try {
        const updateProduct = await Post.updateOne({_id:req.params.productId}, {$set : {title: req.body.title}});
        res.json(updateProduct);
    } catch (error) {
        res.json({messge: error})
    }
});

   module.exports = router;