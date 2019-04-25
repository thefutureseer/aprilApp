const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Pointing url to file
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');

const app = express();

//Body Parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to database
mongoose
 .connect(db)
 .then(()=> console.log('Mongo connected!'))
 .catch( err => console.log(err));

app.get('/', (req, res) => res.send('Hello there!'));

//Use routes/api to connect 
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);

const port = process.env.port || 5000;

app.listen(port, ()=> console.log(`Server running on port ${port} `));
