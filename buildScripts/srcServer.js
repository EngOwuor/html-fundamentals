var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();
var router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../src/index.html'));

});
router.get('/recipes.html',function(req,req){
    req.sendFile(path.join(__dirname,"../src/recipes.html"));
});

router.get('/nutrition.html',function(req,res){
    res.sendFile(path.join(__dirname,'../src/nutrition.html'));
});
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../src/wired-brain-coffee-logo.png'));
});
app.use(express.static('src'));

app.use("/",router);

app.listen(port,function(err){
    if (err){
        console.log(err)
    }else{
        open('http://localhost:'+ port); 
    }
});