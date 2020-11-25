const Discord = require("discord.js"); //Dcs Ekibi
exports.run = async (client, message, args) => {
if (!message.member.hasPermission("BAN_MEMBERS"))
     return message.channel.send("❌ Bu Komutu Kullana Bilmek için `Üyeleri Yasakla` Yetkisine Sahip Olmalısın!")
  let dcs_user = args[0];
  if (isNaN(dcs_user)) return message.reply("Doğru ID Girmelisiniz!");

  message.guild
    .ban(dcs_user)
    message.channel.send(`\`${dcs_user}\` Sunucudan Banlandı!`);

};  //Dcs Ekibi
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["idban"],
  permLevel: 3
};

exports.help = {
  name: "forceban",
  description: "ID ile Sunucudan Birisini Banlar!",
  usage: "forceban <kullanıcı-id>"
};