var express = require('express');
var burger = require("../models/burger.js");
var router = express.Router();

// Get all the data
router.get("/", function(req, res){
  burger.all(function(data){
    var hbObj = {
      burgers: data
    };
    res.render("index", hbObj);
  });
});

router.post("/api/burgers", function(req, res){
  burger.create([
    'burger_name', 'devoured'

  ], [
    req.body.burger_name, req.body.devoured
  ], 
  function(data){
    res.redirect('/')
  })
})



router.put("/api/burgers/update/:id", function(req,res){
  burger.update({
    devoured: true

  }, condition, function(data){
    res.redirect('/')
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

module.exports = router;


