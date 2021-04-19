'use strict';


const express = require('express'),
    app = express(),
    moment = require('moment'),
    bodyParser = require('body-parser'),
    qs = require('qs'),
    router = require('./middleware/router.js');

// Load router
app.use(router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.set('query parser', queryString => {
    return qs.parse(queryString, { depth: 50 });
});

// Start the server
const server = app.listen('1337', (error) => {
    if (error) return console.log(`Error: ${error}`);
    let addr = server.address();
    let bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;

    console.log('serverStarted...' + bind);

});
module.exports = app;

