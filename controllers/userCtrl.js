// this gives the files access to the express app , var app = module.exports = express()
var app = require('../server.js');
// this main need a correct file path
var db = app.get('db');


module.exports = {

//******* this property will add a google user to the database with unqiue id**********************************
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
// ************* will return all the text from a unqiue user to the accountController page ******************************
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
