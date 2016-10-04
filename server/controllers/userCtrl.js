// this gives the files access to the express app , var app = module.exports = express()
var app = require('../server.js');
// this main need a correct file path
var db = app.get('db');

module.exports = {

  // Export an object with 5 functions
  // Create, GetOne, GetAll, Update, Delete

    Create: function(req, res, next) {
      var db = app.get('db');
      db.add_user([req.body.id, req.body.fname, req.body.lname], function(err, response){
        if (err) {
          res.status(200).json(err);
        } else {
            res.send(response);
        }
      });
    },
    GetAll: function(req, res, next) {
    var db = app.get('db');
    db.return_users(function(err, response){
      if (err) {
        res.status(200).json(err);
      } else {
          res.send(response);
      }
    });
  }
};
