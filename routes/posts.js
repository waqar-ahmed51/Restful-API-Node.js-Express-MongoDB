//Import ExpressJS
const express = require("express");
//Imoort Router from Express
const router = express.Router();
//Post Schama for MongoDB
const Post = require('../models/Post');

// Getting all the posts
router.get('/', async (req, res)=>{
    try {
        const posts= await await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({messge: error})
    }
});

//Sending a Post
router.post('/', async (req,res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);    
    } catch (eerrorrr) {
        res.json({messge: error})
    }
});

//Get Single Post
router.get('/:postId', async (req,res)=>{
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json({messge: error})
    }
});

// Delete a post
router.delete('/:postId', async (req,res)=>{
    try {
        const deletePost = await Post.remove({_id:req.params.postId});
        res.json(deletePost);
    } catch (error) {
        res.json({messge: error})
    }
});

// Update a post
router.patch('/:postId', async (req,res)=>{
    try {
        const updatePost = await Post.updateOne({_id:req.params.postId}, {$set : {title: req.body.title}});
        res.json(updatePost);
    } catch (error) {
        res.json({messge: error})
    }
});

   module.exports = router;