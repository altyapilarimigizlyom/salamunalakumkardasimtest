const Discord = require("discord.js");
exports.run = function(client, message, args) {
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("❌ Bu Komutu Kullanabilmek İçin `Sunucuyu Yönet` Yetkisine Sahip Olmalısın!")
  setInterval(() => {
    const artemuscode = client.users.random().avatarURL
    const artemus = new Discord.RichEmbed()
      .setImage('' + artemuscode + '')
      .setColor("RANDOM")
      .setTimestamp();
    message.channel.send(artemus);
  }, 2500); //Bu Zaman Aralığıdır! Her 1000 = 1 Saniye 
}; //Not: Bot Resetlenince Durur!

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};
exports.help = {
  name: "otomatik-random-pp"
};