const Discord = require('discord.js')

exports.run = (client,message,args ) => {  
    let srox1 = args[0]
    let srox2 = args[1]
  
  let hata = new Discord.RichEmbed()
  .setDescription("Lütfen bir yazı yazın.")
  .setColor("RANDOM")
  if(!args[0])  return message.channel.send(hata) 

let embed = new Discord.RichEmbed()
.setImage(`https://api.alexflipnote.dev/pornhub?text=${srox1}&text2=${srox2}`)
.setColor("RANDOM") 
 message.channel.send(embed)  
};
exports.conf = {
    enabled: true,
    guildOnly: false, 
    aliases: ["hub"],
    permLevel: 0
};
exports.help = {
    name: 'hub',
    description: 'Yazdığınız Mesajı (sansür)Hub Yapar',
    usage: '(prefix)hub <yazı1> <yazı2>'
};