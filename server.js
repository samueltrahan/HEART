const express = require('express');
const path = require('path');
const app = express();
const favicon = require('serve-favicon');
const logger = require('morgan');
const port = process.env.PORT || 3001;

require('dotenv').config();
require('./controllers/users')
require('./config/database')



const cors = require('cors')


app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/workouts', require('./routes/api/workouts'));
app.use('/api/todos', require('./routes/api/todos'));
app.use('/api/recipes', require('./routes/api/recipes'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});
