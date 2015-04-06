var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; botRegexCOMMAND = /^\/command/; botRegexTRADE = /^\/trade/; botRegexBLOCK = /^\/block/; botRegexSELL = /^\/sell/;  botRegexTRADES = /^\/completed/; botRegexOWNER = /^\/owners/; botRegexNEW = /^\/new/; botRegexRULES = /^\/rules/; botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;botRegexYub = /^\/yubnub/
      botRegexAd=/^\/advance/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SDL/i; botRegexUs = /^\/users/ ;  
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexCOMMAND.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/16a0fcm_rijQS0X60wBM7bjn_gfEddDXAMmepVYZo7jU/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botRegexTRADE.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://goo.gl/forms/5Vc4qx41Kx");
    this.res.end();
  } 
  else if(request.text && botRegexBLOCK.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1nWUXxMOjGZdfz_fEuL-163t1DQfYQngZBwyxICWD4VU/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botRegexSELL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://goo.gl/forms/dSXpa5WofB");
    this.res.end();
  } 
  else if(request.text && botRegexTRADES.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1_saEfwCioR93CvRG8-ToDB-WsUyLs3_ehhsGaJpAl24/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botRegexOWNER.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1eyNG_yLSz4QUu0rVetQBNeHuUOSzv_Dk1TjKR4zIclI/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botRegexNEW.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://goo.gl/forms/CCxuCunKOw");
    this.res.end();
  } 
  else if(request.text && botRegexRULES.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/1pBCDenl4hQjc5T9ZNX4OYmRhqMhsVLyPzzi-K3gN1Kc/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("NA");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/q3ohLtD.gif");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.kno.com/images/store/knoadvance/overview.png");
    this.res.end();
  }
  else if(request.text && botRegexYub.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.quickmeme.com/img/9f/9f3720469d1ce6c2d20130ed0750935a394df80ffcddec6d16e091d95efea854.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("NA");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("NA");
    this.res.end();
  } 

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.reddit.com/r/maddencl");
    this.res.end();
  } 
  else if(request.text && botRegexUs.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://docs.google.com/spreadsheets/d/1byoEROZXIsl-eRbOxN7PDErjw68kt9ZVnrjoeUnV500/edit#gid=0");
    this.res.end();
  } 
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
