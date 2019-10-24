const express = require('express');
const ReactSSR = require('react-dom/server');
const app = express();

const fs = require('fs');
const path = require('path');

const serverEntry = require("../dist/server-entry").default;
const template = fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf-8');


app.use('/public',express.static(path.join(__dirname,"../dist")));

app.get('*',function(req,res){
    console.log('..... *');
    const appString = ReactSSR.renderToString(serverEntry);
    let ssrpage = template.replace('<app></app>',appString);
    res.send(ssrpage);
})

app.listen(3333,function() {
    console.log('server is listening on 3333');
})