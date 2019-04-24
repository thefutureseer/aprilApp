const express = require('express');
const mongoose = require('mongoose');

const app = express();

//DB config
const db = require('./config/keys').mongoURI;

//connect to database
mongoose
 .connect(db)
 .then(()=> console.log('Mongo connected!'))
 .catch( err => console.log(err));

app.get('/', (req, res) => res.send('Hello there!'));

const port = process.env.port || 5000;

app.listen(port, ()=> console.log(`Server running on port ${port} `));
