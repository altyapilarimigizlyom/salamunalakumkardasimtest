const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
//Dcs Ekibi
exports.run = (client, message, params) => {
 if (!message.member.hasPermission("KICK_MEMBERS"))
     return message.channel.send("❌ Bu Komutu Kullana Bilmek için `Üyeleri At` Yetkisine Sahip Olmalısın!")
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('RED')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**❌ Bu Komutu Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
 let guild = message.guild
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('**Kimi Atmak İstediğini Yazmalısın!**').catch(console.error);

      message.guild.ban(user)
  const embed = new Discord.RichEmbed()
    .setColor('RED')
    .setTimestamp()
  .setTitle('✅  `' +  message.author.username + '`  İşlem Başarılı Kullanıcı Sunucudan Atıldı!' )
  .setImage(`https://media.giphy.com/media/f4V2mqvv0wT9m/giphy.gif`)
  return message.channel.sendEmbed(embed)
};
}      
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["at", 'kick'],
  permLevel: 0
};
//Dcs Ekibi
exports.help = {
  name: 'kick',
  description: 'Seçilen kişiyi atar',
  usage: ' kick'
};