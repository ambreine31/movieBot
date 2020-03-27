'use strict';

const express = require('express');
const conf = require('./config');
const bodyParser = require("body-Parser");
const FBeamer = require('./FBeamer');
const ent = require('./tmdb');

const server = express();
server.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

const fb = new FBeamer(conf.FB);

server.get('/', (req,res) => fb.registerHook(req,res));
/*
server.post('/', (req,res) => fb.incoming(req,res,msg=>{
  if(msg.text){
    console.log(ent(msg.nlp));
    //ent(msg.nlp)
  }
}));
*/
server.post('/', bodyparser.json({
verify: f.verifySignature.call(f);
}));

server.post('/', (req,res,next) =>{
  //smth in here to complete
});

server.listen(PORT, ()=>console.log(`the bot server is running on port ${PORT}`));
//ngrok http 3000
