// represents passportjs
const passport = require('passport');
// represents passport strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy
// get the keys
const keys = require('../config/keys');

// Tell passport to use the Google Strategy to authenticate
// For passport this strategy is known as 'google' internally
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
  // On success do something here
  (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken);
      console.log('refresh token', refreshToken);
      console.log('profil', profile);
  })
);
