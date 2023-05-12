require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 2300;

app.use(express.json());
app.use(express.urlencoded( {
    extended: true
}));

function logger(req, res, next) {
    console.log(new Date(), req.url);
    next();
}

app.use(logger);

const biodataRouter = require('./routes/biodata');
app.use('/', biodataRouter);

app.listen(port);
console.log('Server started at http://localhost:' + port);
