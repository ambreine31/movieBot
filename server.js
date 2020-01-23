'use strict';

const express = require('express');
const conf = require('./config');
const FBeamer = require('./FBeamer');

const server = express();
const PORT = process.env.PORT || 3000;

const fb = new FBeamer(conf.FB);

server.get('/', (req,res) => fb.registerHook(req,res));
server.listen(PORT, ()=>console.log('the bot server is running on port ${PORT}'));
