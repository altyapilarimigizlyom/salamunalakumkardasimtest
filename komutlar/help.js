const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '$'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('<a:maden:741436681344778322> Equilibrium | Moderasyon Komutları <a:maden:741436681344778322>',`
\`$sunucupanel\` **-** \`$sunucu-kur\` **-** \`$mesaj-log\` **-** \`$modlog\` **-** \`$otorol\` **-** \`$sayaç\` **-** \`$çekiliş\` **-** \`$capslockengel\` **-** \`$küfür-engel\` **-** \`$reklam-engel\` **-** \`$sil\` **-** \`$forceban\` **-** \`$ban\` **-** \`$kick\` **-** \`$emojikur\` **-** \`$yazdır\` **-** \`$sa-as\``)
.addField('<a:biciku:741436696121311283> Equilibrium | Eğlence Komutları <a:biciku:741436696121311283>',`
\`$mcbaşarım\` **-** \`$öp\` **-** \`$espri\` **-** \`$aşk-ölçer\` **-** \`$nahçek\` **-** \`$hub\` **-** \`$emojiyazı\``)
.addField('<a:alarm1:741436686873133108> Equilibrium | Kullanıcı Komutları <a:alarm1:741436686873133108>',`
\`$istatistik\` **-** \`$kullanıcı-bilgi\` **-** \`$anime-bilgi\` **-** \`$gifara\` **-** \`$hastebin\` **-** \`$profil\` **-** \`$bug-bildir\` **-** \`$havadurumu\` **-** \`$link-kısalt\` **-** \`$rastgele-şifre\``)
.addField('<a:dance2:741436750702051358> Equilibrium | Müzik Komutları <a:dance2:741436750702051358>',`
\`$çal\` **-** \`$duraklat\` **-** \`$devam\` **-** \`$durdur\` **-** \`$tekrar\` **-** \`$geç\``)
.addField('<a:no2:741436698952466484> Equilibrium | NSFW Komutları <a:no2:741436698952466484>',` 
\`$nsfw-hentai\` **-** \`$nsfw-anal\` **-** \`$nsfw-ass\` **-** \`$nsfw-pussy\` **-** \`$nsfw-gif\` **-** \`$nsfw-4k\``)
.addField(' <a:budur:741436678107037756> Equilibrium | Logo Komutları  <a:budur:741436678107037756>',`
\`$green-logo\` **-** \`$fire-logo\` **-** \`$gold-logo\` **-** \`$gold-logo-2\` **-** \`$discord-logo\` **-** \`$comic-logo\` **-** \`$bubble-logo\` **-** \`$bubble-logo-2\` **-** \`$bubble-logo-3\` **-** \`$booking-logo\` **-** \`$blue-logo\` **-** \`$arrow-logo\``)
// .addField(`Bağlantılar`, `[▫ Destek Sunucu](https://discord.gg/8JtbDzb)[▫ Botun Davet Bağlantısı](https://discord.com/oauth2/authorize?client_id=741065281350402128&scope=bot&permissions=805314622)`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail("https://cdn.discordapp.com/emojis/732698863831613542.gif?v=1")
.setImage("https://media1.tenor.com/images/56c9226463c54b92cbd98cb0433b75fc/tenor.gif?itemid=6212236")

 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help", "yardım"], 
  permLevel: 0
};
exports.help = {
  name: 'help'
};

// .addField('Equilibrium | Disko Rol Komutları',`
// \`$disko-rol-ayarla\` **-** \`$disko-rol-sıfırla\` **-** \`$disko-hız-ayarla\` **-** \`$disko(başlatır)\` **-** \`$diskodurdur\``)

// .addField('Equilibrium | Davet Komutları',`
// \`$davet-ekle\` **-** \`$davet-kanal\` **-** \`$davet-kanal-sıfırla\` **-** \`$davet-sil\` **-** \`$davet-oluştur\` **-** \`$davet-sıfırla\` **-** \`$davetlerim\``)

//  **-** \`$herkese-rol-ver\`**-** \`$rol-ver\`**-** \`$rol-al\`