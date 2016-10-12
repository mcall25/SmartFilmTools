// i have to have postgres working in order for the server to work
var express = require('express');
var massive = require('massive');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var session = require('express-session');
var authpas = require('./config/passport.js');
var config = require('./config/auth.js');

// authpas(passport);

var app = module.exports = express();

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;





var db = massive.connectSync({ db : "founders"});
// the app.set has to go before the controller requiremnt in node
app.set('db', db);


// this varible will export to all files in the project
  var controller = require('./controllers/userCtrl.js');

  var corsOptions = {
       origin: 'http://localhost:3000'
   };

 app.use(session({
     secret: config.config.secret,
     saveUninitialized: true,
     resave: true
}));

app.use(passport.initialize())
app.use(passport.session())

passport.use(new GoogleStrategy({
        clientID: "139619800406-dlhsafsi8nvsp09kirso7aca5eb5ld7k.apps.googleusercontent.com",
        clientSecret: "xhUe0eX4iRfDv6YXRvoEHTig",
        callbackURL: 'http://localhost:3000/auth/google/callback',

    }, function(accessToken, refreshToken, profile, done) {

          // console.log(profile);

          db.find_user([profile.id], function(err, user){

              if (err) return done(err);

              if (!user[0]) {
                db.add_user([profile.id, profile.name.familyName, profile.name.givenName],  function(err, response){
                      if (err) {
                        console.log("*****************", err);
                      }
                      console.log('*********************', response);
                      return done(null, response)
                });
              }
          });
        done(null, profile);
    }));



passport.serializeUser(function(user, done) {
  // this is putting the user.id into the whole session
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  // add in the database call
    db.find_user([id], function(err, user) {
      // req.session.userid = user[0].userid;

    done(err, user[0]);
  });
});


app.use(cors(corsOptions));
    app.use(bodyParser.json());

    app.use(express.static(__dirname + '/public'));


// **************** endpoints for the server *******************************************************************
app.post('/user', controller.Create);
app.get('/users', controller.GetAll);
app.post('/api/text', controller.createText);
app.get('/api/GetAll', controller.GetText);
app.get('/auth/google/callback',  passport.authenticate('google', {failureRedirect: '/' }),  function(req, res, next){

  res.redirect("/#/home")
});

app.get('/api/login/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login']}));


app.listen(3000, function(){
  console.log('server on person project is working');
});
