const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bişey Yaz**")
let link = "https://dynamic.brandcrowd.com/asset/logo/7f0254b2-49ae-4819-9107-47728665a65f/logo?v=4&text="+isim
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setImage(link)
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["green", "greenlogo"],
  kategori: 'logolar',
  permLevel: 0
};

exports.help = {
  name: 'green-logo',
  description: 'Logo Yaparsınız',
  usage: ''
};
