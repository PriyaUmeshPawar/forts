const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();


const society = require('./routes/socRoute')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
})

app.use('/society', society);

app.get('/', function(req, res) {
    res.send('Hello from Server');
})

app.listen(PORT, function() {
    console.log(`Server running on port ${PORT}`)
})