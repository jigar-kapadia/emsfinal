const express = require('express');
const app = express();
const http = require('http');
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 3000);

if (process.env.NODE_ENV == 'production') {
    app.use(function (req, res, next) {
        res.setHeader('Strict-Transport-Security', 'max-age=8640000; includeSubDomains');
        if (req.headers['x-forwarded-proto'] && req.headers['x-forwarded-proto'] === "https") {
            return res.redirect(301, 'http://' + req.host + req.url);
        } else {
            return next();
            }
    });
}