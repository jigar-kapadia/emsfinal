const express = require('express');
const app = express();
const http = require('http');
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 3000);