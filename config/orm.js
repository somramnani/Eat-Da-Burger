var connection = require("./connection");
var mysql = require("mysql");

var orm = {
  selectAll: function(cb) {
    let queryString = 'SELECT * FROM burgers';
    connection.query(queryString,function(error,result){
      if(err){
        throw err;
      }
      cb(result)

    });
  },

  create: function(cols, vals, cb){
    connection.query('INSERT INTO burgers (??) VALUES (?)', [cols, vals], function(error, data){
      if(error){
        throw error;
      }
      else {
        cb(result);
      }
    })

  },

  update: function(objColVals, id, cb ){
    let value = true;
    let queryString = 'UPDATE burgers SET devoured =' + value;
    queryString += 'WHERE id = ' + connection.escape(id);

    connection.query(queryString, function(err, result){
      if(err){
        throw err;
      } 
      else { 
        cb(result)
      }
    })
    
  },
  delete: function(id, cb){
    var queryString = 'DELETE FROM burgers WHERE id = ' + connection.escape(id);
    connection.query(queryString, id, function(err, result){
      if(err){
        throw err;
      } else {
        cb(result);
      }
    })
  }
}

module.exports = orm;