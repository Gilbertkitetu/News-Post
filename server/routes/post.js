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
});

router.get('/getposts', (req, res) => {
    postModel.find({}, function(docs , err){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})

router.post('/getpostdata', (req, res)=>{
    postModel.find({postid: req.body.postid}, (docs, err)=>{
        if(!err) {
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

router.post('/updatepost' , (req , res)=>{
    postModel.findOneAndUpdate({postid: req.body.postid},{
        title: req.body.title,
        imageurl: req.body.imageurl,
        description : req.body.description
    },(err)=>{
        if(!err){
            res.send('Post updated successfully');
        }else {
            res.send(err)
        }
    })
})

router.post('/deletepost' , (req, res)=>{
    postModel.findOneAndDelete({postid: req.body.postid} , (err)=>{
        if(!err){
            res.send('Post deleted successfully')
        }else{
            res.send(err)
        }
    })
})

module.exports = router