const express = require('express');
const ajaxRouter = require('./router/router');
const bodyParser = require('body-parser');
const app = express();
app.listen(8080);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use('/pro', ajaxRouter);