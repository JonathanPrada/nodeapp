const passport = require('passport');

module.exports = (app) => {
  // Express route, involve Passport
  // Whenever an user comes into this route
  // Initiate the OAuth flow, managed by passport
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email'] // Ask Google to give us access to these user details
  }));

  // Handle the code exchange using passport, google sends a code in the url
  // Passport sees the code in the url and exchanges it for the actual profile
  app.get('/auth/google/callback', passport.authenticate('google'))
};
