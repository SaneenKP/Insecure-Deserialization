const express = require('express');
const cookieParser = require('cookie-parser')-p
const escape = require('escape-html');
const serialize = require('node-serialize');

var app = express()
app.use(cookieParser())

app.get('/' , (req , res) => {

    if(req.cookies.profile){
        var str = new Buffer(req.cookies.profile , 'base64')
    }

})