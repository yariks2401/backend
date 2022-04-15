require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes')
const app = express();

if (process.env.NODE_ENV==='development') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use((req, res, next)=>{
    req.requestTime = new Date().toISOString();
    next();
})
app.use('/users', userRoutes);

module.exports = app;
