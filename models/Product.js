const mongoose = require("mongoose");

const ProductSchema=mongoose.Schema({
    id: {
            type:Number,
            required:true
        },
    title: {
            type:String,
            required:true
        },
    desc: {
            type:String,
            required:true
        },
    img: {
            type:String,
            required:true
        },
    price: {
            type:Number,
            required:true
        },
    priceQuantity:{
            type:Number,
            required:true
        }, 
     quantity:{
            type:Number,
            required:true
        },
    category:{
            type:String,
            required:true
        },
    popular:{
            type:String,
            required:true
        },
    "Main Features": {
            type:String,
            required:true
        },
    date: {
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Product', ProductSchema);
