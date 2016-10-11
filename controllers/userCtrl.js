// this gives the files access to the express app , var app = module.exports = express()
var app = require('../server.js');
// this main need a correct file path
var db = app.get('db');


module.exports = {

  // Export an object with 5 functions
  // Create, GetOne, GetAll, Update, Delete

Create: function(req, res, next) {
      db.add_user([req.body.id, req.body.fname, req.body.lname], function(err, response){
            if (err) {
              res.status(500).json(err);
            } else {
                res.status(200).json();
            }
      });
    },

GetAll: function(req, res, next) {

      db.return_users(function(err, response){
          if (err) {
            res.status(400).json(err);
          } else {
            res.status(200).json();
          }
    });
  },

createText: function(req, res, next) {
        db.pushText_text([req.body.arrayname, req.user.userid], function(err, response){
            if (err) {
              res.status(500).json(err);
            } else {
              res.send(response);
            }
      });
    },

    GetText: function(req, res, next) {
            db.getAll_text([req.user.userid], function(err, response){
                if (err) {
                  res.status(500).json(err);
                } else {
                  res.send(response);
                }
          });
        }



};
