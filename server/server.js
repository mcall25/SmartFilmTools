var express = require('express');
var massive = require('massive');
var bodyParser = require('body-parser');
var cors = require('cors');


var app = express();
var db = massive.connectSync({ db : "founders"});



// this varible will export to all files in the project
var app = module.exports = express();
  var controller = require('./controllers/userCtrl.js');


app.use(bodyParser.json());
app.use(cors());
app.set('db', db);
var db = app.get('db');



// endpoints for the server
app.post('/user', controller.Create);
app.get('/users', controller.GetAll);
app.post('/text', controller.createText);


app.listen(4000, function(){
  console.log('server on person project is working');
});


// to do
// Use express static to serve up your angular files from a public folder
// Create a single view that can insert, read, update, and delete products.
// Create a 2nd page that just reads the products and displays them in a more pretty way (like Jane.com or amazon).

// To do this we need to create a new object in our server.js containing some simple configuration information. Note that you will need to replace the port number with your selected port number.
// var corsOptions = {
//     origin: 'http://localhost:8999'
// };
// Now we can call app.use(cors(corsOptions)); and we will only be accepting requests from our selected origin.
