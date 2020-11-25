const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`<a:no1:741436672427688036> <@${message.author.id}>, Bu komutu kullanmak için \`Mesajları Yönet\` iznine sahip olmalısın. ❌`));
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`<a:no1:741436672427688036> <@${message.author.id}> __Botun ne yazmasını istiyorsan onu belirtmelisin.__`));
  message.delete();
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`${mesaj}`)
.setFooter(`Yazdıran kişi: ${message.author.tag}`, message.author.avatarURL);
message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazdir', 'yaz'],
  permLevel: 0
};

exports.help = {
  name: 'yazdır',
  description: 'Yazdır',
  usage: 'yazdır [yazdırmak istediğiniz şey]'
};