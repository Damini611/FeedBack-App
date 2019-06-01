//https://stackoverflow.com/questions/46677752/the-difference-between-requirex-and-import-x/46677972
const express = require('express');
const mongoose  = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const data = require('./config/keys');
//Since we do not want any information from passport.js  and users.js file, WE JUST WANT IT TO BE EXECUTED
// so we do not have to assign the require statement to any variable or constant
//Here order of below two files are important because we are creating the "userscollection" schema in user files
//And the using the same schema in passport.js file
require("./ModelClass/users.js");
require("./services/passport.js");
const port = process.env.PORT || 5000;
const authRoutes = require('./routes/authRoutes.js');

//connect to the remote instance of mongodb database
mongoose.connect(data.mongoURI);

const app = express();

app.use(
  cookieSession({
    // MaxAge is in ms for 30 days
    maxAge : 30 * 24 * 60 * 60 *1000,
    keys : [data.cookieKey]
  }));

  //Telling the passport.js object to use cookies
  app.use(passport.initialize());
  //passprt.session()  it essentially acts as a middleware and alters the value of the 'user' property in the
  //req object to contain the deserialized identity of the user.
  //To allow this to work correctly you must include serializeUser and deserializeUser functions in your custom code.
  app.use(passport.session());

//app is the Express object that listens to the specifies port and "/" specifies the route"
//This method will watch for requests accessing "/"
//req - Object representing incoming request
//res - Object represen ting the outgoing response
//Express app has other methods too: get, put, post, delete , patch
//res.send: A JSON is rendered on the client browser which made this request '/'
app.get('/', (req, res) => res.send("Hello Damini !!"));
//https://console.developers.google.com/?pli=1

//We are calling the export object of authRoutes.js file and hence anonymousfunction in export object will be executed
authRoutes(app);
//Express app is instructing node to listen to port 500(refer diagram Node_vs_Express.jpg)
app.listen(port);
