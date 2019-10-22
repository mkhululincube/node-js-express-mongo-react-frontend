const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config").get(process.env.NODE_ENV);
const SALT_I = 10;

const bookSchema = mongoose.Schema({
name:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    },
    review:{
        type:String
    },
    pages:{
        type:String,
    },
    rating:{
        type:Number
        },
    price:{
        type:String,
    },
    ownerId:{
        type:String,
    }
},{
    timestamp:true
})

const Book = mongoose.model("Book", bookSchema);

module.exports = { Book }
