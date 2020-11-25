const Discord = require("discord.js");
let ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;
exports.run = function(client, msg, author) {
  var gif = [
    `https://media.discordapp.net/attachments/444840461006405642/706272638695243906/nah.gif`
  ];
  let Equilibrium = msg.mentions.members.first();
  if (!Equilibrium) {
    msg.channel.sendMessage(
      "**Örnek Kullanım:** `" + prefix + "nahçek <@kullanıcı>`"
    );
  }
  if (Equilibrium) {
    const Embed = new Discord.RichEmbed()
      .setTitle("Equilibrium")
      .setDescription(`**${Equilibrium} Adlı Kullanıcıya Özel Silah Kullanıldı**`)
      .setColor("RANDOM")
      .setImage(`${gif}`);
    msg.channel.sendMessage(Embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "nahçek",
  description: "Bu komut ile istediğiniz kişiye sarılırsın!",
  usage: "nahçek <@kullanıcı>"
};