const express = require('express');
const bodyParser = require('body-parser')

const mongoose = require('./conn');
const postroute = require('./routes/post')
const app =  express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))
app.use('/api/post', postroute)
app.get('/', (req, res)=>{
    res.send("Hello Ninja");
});


app.listen(5000 , function (){
    console.log("App listening on port 5000");
});