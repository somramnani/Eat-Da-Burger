var express = require('express');
var burger = require("../models/burger");
var router = express.Router();

router.get('/', function(req, res){
  burger.all(function(data){
    var hbObj = {
      burgers: res
    }
    res.render("index", hbObj);
  })
});

router.post("/api/burgers", function(req, res){
  burger.create([
    'burger_name', 'devoured'

  ], [
    req.body.burger_name, req.body.devoured
  ], 
  function(result){
    res.end();
  })
})

router.delete('/api/burgers/delete/:id', function(req,res){
  burger.delete([
    req.params.id, res
  ],
  function(){
    res.end();
  })
})

router.update("/api/burgers/update/:id", function(req,res,next){
  burger.update([
    req.body, req.params
  ],[
    function(){
      res.end();
    }
  ])
  
})

module.exports = router;


