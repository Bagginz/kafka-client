const express = require('express');
const app = express();

const consumer = require('./consumer');
const producer = require('./producer');

app.set('port', process.env.PORT || 9981);

var server = app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;
