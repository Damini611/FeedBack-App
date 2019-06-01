const passport = require('passport');

//module.exports is the object that's actually returned as the result of a require call
module.exports = function (app) {
  // when we use the string 'google' , we are internally using the above defined  GoogleStrategy object
  //Google has a list of various other scopes as well like read all contact images, photos inside drive
  //when we access this url it gets redirected to google auth web page and uses above passport object for Authentication
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile','email'] }));

  //'/auth/google/callback' is mentioned in google developer page ---> When user is redirected to this path, there will be a "CODE" in the URL which is sent by Google server
  //passport will not try to authenticate the user for the first time but instead share the code back with the google servers
  //when google recieves the code it redirects to this page(auth/google/callback) with the user details mentioned in scope
  //At the second time, callback method of passport.use() is called
  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.send("Successful");
    });


//logout method kills the user id in the current cookie automatically

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send("user is successfully logged out");
  });

//passport.js attaches the profile information to req.user
//So in this method we can read the current logged in user information from the server
  app.get('/api/current_user', (req, res) => {
      res.send(req.user);
    });

};
