const express = require('express');
const cookieParser = require('cookie-parser')
const escape = require('escape-html');
const serialize = require('node-serialize');

var app = express()
app.use(cookieParser())

app.get('/' , (req , res) => {

    if(req.cookies.profile){
        var str = new Buffer(req.cookies.profile , 'base64')
        var obj = serialize.unserialize(str);

        if(obj.username){
            res.send("Hello " + escape(obj.username))
        }
    }else{
        res.cookie('profile' , "saneen" , {
            maxAge: 900000,
            httpOnly: true
        })
    }

    res.send("Hello world");
})
app.listen(3000)
