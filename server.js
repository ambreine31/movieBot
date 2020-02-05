'use strict';

const express = require('express');
const conf = require('./config');
const bodyParser = require("body-Parser");
const FBeamer = require('./FBeamer');

const server = express();
server.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

const fb = new FBeamer(conf.FB);

server.get('/', (req,res) => fb.registerHook(req,res));
server.post('/', (req,res) => fb.incoming(req,res));
server.listen(PORT, ()=>console.log(`the bot server is running on port ${PORT}`));
console.log(res.nlp.entities)
//ngrok http 3000
