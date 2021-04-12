const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mern_crud', {userNewUrlParser: true, useUnifiedTopology: true});

const dbobject = mongoose.connection

dbobject.on('connected', ()=>{
    console.log("Mongodb connected successfully");
})
dbobject.on('error', ()=>{
    console.log("Mongodb connection failed");
})

module.exports = mongoose;