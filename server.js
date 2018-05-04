const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(PORT, function(){
    console.log("listening on" + PORT);
})
require('./app/routing/htmlRoutes.js')(app);