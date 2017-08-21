// import express library, require is the way nodejs gets libraries
const express = require('express');
// Get the passport stuff
require('./services/passport');
// represents a single application using express
const app = express();

// import auth routes, // call authRoutes with the app object
require('./routes/authRoutes')(app);

// Heroku configuration, Look at the enviroment variable and use it
// If we are not in production and in dev, just use 5000
const PORT = process.env.PORT || 5000;

//The PORT the application listens in on
app.listen(PORT);
