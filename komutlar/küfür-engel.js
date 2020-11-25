const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
if(args[0] === 'aç') {
    db.set(`${message.guild.id}.kufur`, true)
    message.channel.send('Başarılı Şekilde `Aktif` Edildi.')
  return
}
if (args[0] === 'kapat') {
  db.delete(`${message.guild.id}.kufur`)
message.channel.send('Başarılı Şekilde `Deaktif` Edildi')
return
}
  message.channel.send(new Discord.RichEmbed().setDescription("**Eksik Komut Kullanımı!**").addField("Doğru Kullanım",`\`${a.prefix}küfür-engel aç\` **veya** \`${a.prefix}küfür-engel kapat\``).setColor("RED"));
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür', 'antiküfür'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-engel',
 description: 'Davet Log Kanalını Belirler',
 usage: 'davet-kanal-ayarla #kanal'
};