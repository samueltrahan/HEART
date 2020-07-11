const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3001;

require('dotenv').config();
require('./config/database');

const userRouter = require('./routes/users');
const workoutRouter = require('./routes/workouts');
const cors = require('cors')


app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/workouts', workoutRouter);

app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});
