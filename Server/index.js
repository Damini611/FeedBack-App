//https://stackoverflow.com/questions/46677752/the-difference-between-requirex-and-import-x/46677972
const express = require('express');
const app = express();
const passport = require('passport');
//We only want to import strategy property of passport-google-oauth20 module
const GoogleStrategy = require('passport-google-oauth20').Strategy;
var port = process.env.PORT || 5000;
//var test = require('./config/keys');

//app is the Express object that listens to the specifies port and "/" specifies the route"
//This method will watch for requests accessing "/"
// req - Object representing incoming request
// res - Object represen ting the outgoing response
//Express app has other methods too: get, put, post, delete , patch
//res.send: A JSON is rendered on the client browser which made this request '/'
app.get('/', (req, res) => res.send("Hello Damini !!"));
//https://console.developers.google.com/?pli=1

//callback URL is the redirect URI which is registered at console.developer.google.com and users get
// redirected to this page after google grant the permission to user
//Passport object uses google strategy object whic is imported at the top of the page
// passport.use(new GoogleStrategy(
//   {
//   clientID: test.Googleclientid,
//   clientSecret: test.Googlesecretclientid,
//   callbackURL: "/auth/google/callback"
// },
//    (accessToken, refreshToken, profile, done) => {
//     console.log(accessToken);
//     console.log("refresh " + refreshToken);
//     console.log("profile" + JSON.stringify(profile));
//   }
//  )
// );
// //
// // when we use the string 'google' , we are internally using the above defined  GoogleStrategy object
// //Google has a list of various other scopes as well like read all contact images, photos inside drive
// //when we access this url it gets redirected to google auth web page and uses above passport object for Authentication
// app.get('/auth/google', passport.authenticate('google', { scope: ['profile','email'] }));
//
// //When user is redirected to the path "/auth/google/callback", there will be a "CODE" in the URL which is sent by Google server
// //passport will not try to authenticate the user for the first time but instead share the code back with the google servers
// //when google recieves the code it redirects to this page(auth/google/callback) with the user details mentioned in scope
// //At the second time, callback method of passport.use() is called.
//
// app.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.send("Successful");
//   });
//Express app is instructing node to listen to port 500(refer diagram Node_vs_Express.jpg)
app.listen(port);
