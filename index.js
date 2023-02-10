const express = require('express');
const port = 8000;
const app = express();
const bodyParser = require("body-parser");

const Contact = require('./models/contact');

// set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.json());
app.use(express.urlencoded());

app.use(express.static("./assets"));

app.use('/', require('./routes/contactRouter'));

app.listen(port, function(err){
    if(err){
        console.log(`Error while running the seriver: ${err}`);
        return;
    }
    console.log(`Server is up and running on port: ${port}`);
});