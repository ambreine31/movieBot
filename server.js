'use strict';

const express = require('express');
const conf = require('./config');
const beamer = require('./FBeamer');

const server = express();
const PORT = process.env.PORT || 3000;

server.get('/', (req,res) => res.send("hello!!"));
server.listen(PORT, ()=>console.log('the bot server is running on port ${PORT}'));
