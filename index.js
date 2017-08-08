// import express library, require is the way nodejs gets libraries
const express = require('express');
// represents passportjs
const passport = require('passport');
// represents passport strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy
// get the keys
const keys = require('./config/keys');

// represents a single application using express
const app = express();

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

// Express route, involve Passport
// Whenever an user comes into this route
// Initiate the OAuth flow, managed by passport
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'] // Ask Google to give us access to these user details
}));

// Handle the code exchange using passport, google sends a code in the url
// Passport sees the code in the url and exchanges it for the actual profile
app.get('/auth/google/callback', passport.authenticate('google'))

// Heroku configuration, Look at the enviroment variable and use it
// If we are not in production and in dev, just use 5000
const PORT = process.env.PORT || 5000;

//The PORT the application listens in on
app.listen(PORT);
