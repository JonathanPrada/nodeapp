// import express library, require is the way nodejs gets libraries
const express = require('express');

// represents a single application using express
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

//localhost:5000
app.listen(5000);
