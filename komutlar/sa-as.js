const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`❌<@${message.author.id}>, Bu komutu kullanmak için \`Mesajları Yönet\` iznine sahip olmalısın. ❌`));
  if (!args[0]) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('⛔ **Sa-As ayarlamak için;** `$sa-as aç ya da kapat` ⛔'))
  
  if (args[0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'açık')
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`**Başarıyla SA-AS açtınız, artık bot \`sa\` yazıldığında otomatik \`Aleyküm selam dostum iyi günler dilerim :slight_smile:\` diyecek.**`))
    
  }
  if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapali')
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`**Başarıyla SA-AS kapattınız, artık bot \`sa\` yazıldığında cevap vermeyecek.**`))
    
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sa-as',
  description: 'Sa-as',
  usage: 'taslak'
};