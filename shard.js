const Discord = require('discord.js');
const ayarlar = require('./ayarlar.json');

const bot = new Discord.Client()

const alpike = new Discord.ShardingManager('./bot.js', {
    totalShards: 1,
    token: ayarlar.codetoken
});

alpike.spawn(); 

alpike.on('launch', shard => {
    console.log(`${shard.id}. Shard açıldı.`);
});

setTimeout(() => {
    alpike.broadcastEval("process.exit()");
}, 21600000);

 const http = require("http");
const express = require("express");
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) { 
    if ((new Date().getTime() - start) > milliseconds){ 
      break;
    }
  }    
}
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");  
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 3000);

