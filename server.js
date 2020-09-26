const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Parse Application Json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Get Routes
const routes = require('./src/helper/routes');
routes(app);


app.listen(3000, () => {
    console.log('Running Success');
});