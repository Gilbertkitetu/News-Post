const express = require('express')
const router = express.Router()


const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postschema = new Schema({
    title : String,
    imageurl: String,
    description: String,
    postid: String
})


const postModel = mongoose.model('posts', postschema)

router.post('/addnewpost', (req, res)=>{
   const newpost = new postModel({
       title: req.body.title,
       imageurl: req.body.imageurl,
       description: req.body.description,
       postid: req.body.postid
   })
    newpost.save(function (err){
        if(!err){
            res.send("New post added succefully")
        }
        else{
            res.send(err)
        }
    })
})


module.exports = router