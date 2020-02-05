'use strict'
const bodyParser = require("body-Parser");

class FBeamer{
  constructor({pageAccessToken, VerifyToken}){
    this.pageAccessToken = pageAccessToken;
    this.VerifyToken = VerifyToken;

  }

  registerHook(req,res) {
    const params = req.query;
    console.log(params);
    const mode = params['hub.mode'],
    token = params['hub.verify_token'],
    challenge = params['hub.challenge'];
    try{
      if(mode === 'subscribe' && token === this.VerifyToken){
        console.log("Webhook is registered");
        return res.send(challenge);
      }else{
        throw "Could not register webhook!";
        return res.sendStatus(200);
      }
    }catch(e){
      console.log(e);
    }
  }

  incoming(req, res, cb){
    let data = req.body;
    console.log("incoming",data);
    if(data.object === 'page'){
      data.entry.forEach(pageObj => {
        console.log(pageObj.messaging);
        cb(pageObj.messaging)
      });
    }
    res.sendStatus(200);
  }

  //message(id,time, )
}

module.exports = FBeamer;
