const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http");
const express = require("express");
require("./util/eventLoader.js")(client);
const path = require("path")
const request = require("request");
const snekfetch = require("snekfetch");
const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");

client.queue = new Map()


var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.on("message", async message => {
  if(message.author.id === client.user.id) return;
  if(message.guild) return;
client.channels.get('738911921767448756').send(new Discord.RichEmbed().setAuthor('Yeni DM!').setFooter('DM-LOG SİSTEMİ!').setDescription(`Gönderen kişi:   ${message.author.tag}`).setTimestamp().setThumbnail(client.user.avatarURL).addField("Mesajı;",
message.content).setColor("GOLD"))//DCS!
})
   
//const embed3 = new Discord.RichEmbed()
//.setTitle("Dostum etiketlemezsen sevinirim çünkü sahibim. 🙂")
//client.on('message', message => {
//if (message.content === `<@587208055251402752>`) {
//message.channel.send(embed3) 
//}});

//const embed2 = new Discord.RichEmbed()
//.setTitle("Dostum etiketlemezsen sevinirim çünkü sahibimin en sevdiği arkadaşı. 🙂")
//client.on('message', message => {
//if (message.content === `<@405751466289266698>`) {
//message.channel.send(embed2) 
//}});

const embed = new Discord.RichEmbed()
.setTitle("Prefix: $")
client.on('message', message => {
if (message.content === `<@!741065281350402128>`) {
message.channel.send(embed) 

}});

client.on('voiceStateUpdate', member => {
client.guilds.get("757766642334826607").channels.get('757948474254688348').members.forEach(equilibrium =>{
  setTimeout(() => {
equilibrium.addRole('757771595610587176')
equilibrium.removeRole("757778938918469764")
 }, 10000) // 1000 = 1 saniye
})
})

client.on("message", async msg => {
 const i = await db.fetch(`${msg.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.reply('Bu Sunucuda Küfür Filtresi Aktiftir.').then(msg => msg.delete(3000));
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  
  
 const i = db.fetch(`${newMessage.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => newMessage.content.includes(word))) {
          try {
            if (!newMessage.member.hasPermission("BAN_MEMBERS")) {
                  newMessage.delete();
                          
                      return newMessage.reply('Bu Sunucuda Küfür Filtresi Aktiftir.').then(msg => msg.delete(3000));
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sa') {
        msg.reply('Aleyküm selam dostum iyi günler dilerim :slight_smile:');      
      } 
      }
    });

client.on("guildMemberAdd", async(member) => {
  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`)
  if(sunucupaneli) {
    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`)
    let toplamuye = member.guild.channels.find(x =>(x.name).startsWith("Toplam Üye •"))
    let toplamaktif = member.guild.channels.find(x =>(x.name).startsWith("Aktif Üye •"))
    let botlar = member.guild.channels.find(x =>(x.name).startsWith("Botlar •"))
    let rekoraktif = member.guild.channels.find(x =>(x.name).startsWith("Rekor Aktiflik •"))
    
    if(member.guild.members.filter(off => off.presence.status !== 'offline').size > rekoronline) {
      db.set(`panelrekor_${member.guild.id}`, member.guild.members.filter(off => off.presence.status !== 'offline').size)
    }
    try{
      toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`)
      toplamaktif.setName(`Aktif Üye • ${member.guild.members.filter(off => off.presence.status !== 'offline').size}`)
      botlar.setName(`Botlar • ${member.guild.members.filter(m => m.user.bot).size}`)
      rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`)
   } catch(e) { }
  }
})

client.on("guildMemberRemove", async(member) => {
  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`)
  if(sunucupaneli) {
    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`)
    let toplamuye = member.guild.channels.find(x =>(x.name).startsWith("Toplam Üye •"))
    let toplamaktif = member.guild.channels.find(x =>(x.name).startsWith("Aktif Üye •"))
    let botlar = member.guild.channels.find(x =>(x.name).startsWith("Botlar •"))
    let rekoraktif = member.guild.channels.
    find(x =>(x.name).startsWith("Rekor Aktiflik •"))
    
    if(member.guild.members.filter(off => off.presence.status !== 'offline').size > rekoronline) {
      db.set(`panelrekor_${member.guild.id}`, member.guild.members.filter(off => off.presence.status !== 'offline').size)
    }
    try{
      toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`)
      toplamaktif.setName(`Aktif Üye • ${member.guild.members.filter(off => off.presence.status !== 'offline').size}`)
      botlar.setName(`Botlar • ${member.guild.members.filter(m => m.user.bot).size}`)
      rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`)
   } catch(e) { }
  }
})

// sayaç

client.on("guildMemberAdd", member => {
  const profil = JSON.parse(fs.readFileSync("./sayaç.json", "utf8"));
  if (!profil[member.guild.id]) return;
  if (profil[member.guild.id]) {
    let sayaçkanalID = profil[member.guild.id].kanal;
    let sayaçsayı = profil[member.guild.id].sayi;
    let sayaçkanal = client.channels.get(sayaçkanalID);
    let aralık = parseInt(sayaçsayı) - parseInt(member.guild.members.size);
    sayaçkanal.sendMessage(
       "<a:tik3:741436675271688222> `" + `${member.user.tag}` + "` Sunucuya Katıldı! **" + sayaçsayı + "** Kişi Olmamıza **" + aralık + "** Kişi Kaldı **" + member.guild.members.size + "** Kişiyiz!"
    );
  } 
});

client.on("guildMemberRemove", member => {
  const profil = JSON.parse(fs.readFileSync("./sayaç.json", "utf8"));
  if (!profil[member.guild.id]) return;
  if (profil[member.guild.id]) {
    let sayaçkanalID = profil[member.guild.id].kanal;
    let sayaçsayı = profil[member.guild.id].sayi;
    let sayaçkanal = client.channels.get(sayaçkanalID);
    let aralık = parseInt(sayaçsayı) - parseInt(member.guild.members.size);
    sayaçkanal.sendMessage(
        //"`" + `${member.user.tag}` + "`" + " Sunucudan Ayrıldı! `" + sayaçsayı + "` Kişi Olmamıza`" + aralık + "` **Kişi Kaldı!**`" + member.guild.members.size + "` Kişiyiz!"
       "<a:no1:741436672427688036> `" + `${member.user.tag}` + "` Sunucudan Ayrıldı! **" + sayaçsayı + "** Kişi Olmamıza **" + aralık + "** Kişi Kaldı **" + member.guild.members.size + "** Kişiyiz!"
    );
  }
});



client.on('guildMemberAdd', async (member, guild, message) => {
 
let role = db.fetch(`otorolisim_${member.guild.id}`)
 let otorol = db.fetch(`autoRole_${member.guild.id}`)
 let i = db.fetch(`otorolKanal_${member.guild.id}`)
 if (!otorol || otorol.toLowerCase() === 'yok') return;
else {
 try {
 
 
  if (!i) return
if (!role) {
  member.addRole(member.guild.roles.get(otorol))
                        var embed = new Discord.RichEmbed()
                        .setDescription("**<a:tik3:741436675271688222> Sunucuya Yeni Katılan** @" + member.user.tag + " **Kullanıcısına** <@&" + otorol + ">  **Rolü verildi.**")
                        .setColor('GREEN')
                        .setFooter(`Equilibrium Oto Rol Sistemi`)
     member.guild.channels.get(i).send(embed)
} else if (role) {
    member.addRole(member.guild.roles.get(otorol))
                        var embed = new Discord.RichEmbed()
                        .setDescription(`**<a:tik3:741436675271688222> Sunucuya Yeni Katılan** \`${member.user.tag}\` **Kullanıcısına** \`${role}\` **Rolü verildi.**`)
                        .setColor('GREEN')
                        .setFooter(`Equilibrium Oto Rol Sistemi`)
     member.guild.channels.get(i).send(embed)
 
}
 
 } catch (e) {
 console.log(e)
}
}
 
});

// otorol

client.on("message", msg => {
  var reklam = db.fetch(`reklam_${msg.channel.id}`);
  if (reklam == "acik") {
    const reklam = [
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      "net",
      ".rf.gd",
      ".az",
      ".party",
      "discord.gg"
    ];
    if (reklam.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();

          return msg
            .reply("Reklam Yapma Dostum. ")
            .then(msg => msg.delete(3000));
        }
      } catch (err) {
        console.log(err);
      }
    } 
  } else if (reklam == "kapali") {
  }
  if (!reklam) return;
});
  
client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 4) {
    if (db.fetch(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel
              .send(`✋ Lütfen Büyük Harf Kullanma!`)
              .then(m => m.delete(5000));
          }
        } 
      }
    }
  }
});

client.on("messageDelete", async message => {
  let mslog = await db.fetch(`mslog_${message.guild.id}`);
  if (!mslog) return;
  const entry = await message.guild.fetchAuditLogs({type: 'MESSAGE_DELETE'}).then(audit => audit.entries.first());
  let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL) //dcs
  .setTitle("Mesaj Silme")
  .addField("**Mesajın Sahibi**", `<@${message.author.id}> **|** \`${message.author.id}\``)
  .addField("**Mesaj**", `${message.content}`)
  .setTimestamp()
  .setColor("RED")
  client.channels.get(mslog).send(embed)
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
  let mslog = await db.fetch(`mslog_${oldMessage.guild.id}`);
  if (!mslog) return;
  let embed = new Discord.RichEmbed()
  .setThumbnail(oldMessage.author.avatarURL) //dcs
  .setTitle("Mesaj Düzenleme")
  .addField("**Mesajın Sahibi**", `<@${oldMessage.author.id}> | **${oldMessage.author.id}**`)
  .addField("**Eski Mesajı**", `${oldMessage.content}`)
  .addField("**Yeni Mesajı**", `${newMessage.content}`)
  .setTimestamp()
  .setColor("RED")
  client.channels.get(mslog).send(embed)
});

client.on("guildCreate", guild => {
  let dcs_kanal = client.channels.get("738490203856961686")

 const dcs = new Discord.RichEmbed()
.setTitle("SUNUCUYA EKLENDİM")
.setColor("GREEN")
.addField('▪ Sunucu İsmi', `\`${guild.name}\``)
.addField('▪ Üye Sayısı', `\`${guild.members.size}\``)
.addField('▪ Kurucu', `\`${guild.owner.user.tag}\``)
dcs_kanal.send(dcs)
});

client.on("guildDelete", guild => {
  let dcs_kanal = client.channels.get("738490203856961686")

 const dcs = new Discord.RichEmbed()
.setTitle("SUNUCUDAN AYRILDIM")
.setColor("RED")
.addField('▪ Sunucu İsmi', `\`${guild.name}\``)
.addField('▪ Üye Sayısı', `\`${guild.members.size}\``)
.addField('▪ Kurucu', `\`${guild.owner.user.tag}\``)
dcs_kanal.send(dcs)
});

// mod-log.js

client.on("messageDelete", async message => {
  let modlog = await db.fetch(`genelmodlog_${message.guild.id}`);
  if (!modlog) return;
  const entry = await message.guild.fetchAuditLogs({type: 'MESSAGE_DELETE'}).then(audit => audit.entries.first());
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField("**Eylem**", "Mesaj Silme")
  .addField("**Mesajın sahibi**", `<@${message.author.id}> === **${message.author.id}**`)
  .addField("**Mesajı silen kişi**", `<@${entry.executor.id}>`)
  .addField("**Mesaj**", `${message.content}`)
  .setTimestamp()
  .setFooter(`Sunucu: ${message.guild.name} - ${message.guild.id}`, message.guild.iconURL)
  .setThumbnail(message.guild.iconURL)
  .setColor("RANDOM")
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
  let modlog = await db.fetch(`genelmodlog_${oldMessage.guild.id}`);
  if (!modlog) return;
  let embed = new Discord.RichEmbed()
  .setAuthor(oldMessage.author.username, oldMessage.author.avatarURL)
  .addField("**Eylem**", "Mesaj Düzenleme")
  .addField("**Mesajın sahibi**", `<@${oldMessage.author.id}> === **${oldMessage.author.id}**`)
  .addField("**Eski Mesajı**", `${oldMessage.content}`)
  .addField("**Yeni Mesajı**", `${newMessage.content}`)
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter(`Sunucu: ${oldMessage.guild.name} - ${oldMessage.guild.id}`, oldMessage.guild.iconURL)
  .setThumbnail(oldMessage.guild.iconURL)
  client.channels.get(modlog).sendEmbed(embed)
});

client.on("channelCreate", async(channel) => {
let modlog = await db.fetch(`genelmodlog_${channel.guild.id}`);
  if (!modlog) return;
  const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first());
  let kanal;
  if (channel.type === "text") kanal = `<#${channel.id}>`
  if (channel.type === "voice") kanal = `\`${channel.name}\``
  let embed = new Discord.RichEmbed()
  .setAuthor(entry.executor.username, entry.executor.avatarURL)
  .addField("**Eylem**", "Kanal Oluşturma")
  .addField("**Kanalı Oluşturan Kişi**", `<@${entry.executor.id}>`)
  .addField("**Oluşturduğu Kanal**", `${kanal}`)
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter(`Sunucu: ${channel.guild.name} - ${channel.guild.id}`, channel.guild.iconURL)
  .setThumbnail(channel.guild.iconURL)
  client.channels.get(modlog).sendEmbed(embed)
  })

client.on("channelDelete", async(channel) => {
let modlog = await db.fetch(`genelmodlog_${channel.guild.id}`);
  if (!modlog) return;
  const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first());
  let embed = new Discord.RichEmbed()
  .setAuthor(entry.executor.username, entry.executor.avatarURL)
  .addField("**Eylem**", "Kanal Silme")
  .addField("**Kanalı Silen Kişi**", `<@${entry.executor.id}>`)
  .addField("**Silinen Kanal**", `\`${channel.name}\``)
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter(`Sunucu: ${channel.guild.name} - ${channel.guild.id}`, channel.guild.iconURL)
  .setThumbnail(channel.guild.iconURL)
  client.channels.get(modlog).sendEmbed(embed)
  })

client.on("roleCreate", async(role) => {
let modlog = await db.fetch(`genelmodlog_${role.guild.id}`);
  if (!modlog) return;
  const entry = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first());
  let embed = new Discord.RichEmbed()
  .setAuthor(entry.executor.username, entry.executor.avatarURL)
  .addField("**Eylem**", "Rol Oluşturma")
  .addField("**Rolü oluşturan kişi**", `<@${entry.executor.id}>`)
  .addField("**Oluşturulan rol**", `\`${role.name}\` **=** \`${role.id}\``)
  .setTimestamp()
  .setFooter(`Sunucu: ${role.guild.name} - ${role.guild.id}`, role.guild.iconURL)
  .setColor("RANDOM")
  .setThumbnail(role.guild.iconURL)
  client.channels.get(modlog).sendEmbed(embed)
  })

client.on("roleDelete", async(role) => {
let modlog = await db.fetch(`genelmodlog_${role.guild.id}`);
  if (!modlog) return;
  const entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first());
  let embed = new Discord.RichEmbed()
  .setAuthor(entry.executor.username, entry.executor.avatarURL)
  .addField("**Eylem**", "Rol Silme")
  .addField("**Rolü silen kişi**", `<@${entry.executor.id}>`)
  .addField("**Silinen rol**", `\`${role.name}\` **=** \`${role.id}\``)
  .setTimestamp()
  .setFooter(`Sunucu: ${role.guild.name} - ${role.guild.id}`, role.guild.iconURL)
  .setColor("RANDOM")
  .setThumbnail(role.guild.iconURL)
  client.channels.get(modlog).sendEmbed(embed)
  })

client.on("emojiCreate", async(emoji) => {
  let modlog = await db.fetch(`genelmodlog_${emoji.guild.id}`);
  if (!modlog) return;
  const entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_CREATE'}).then(audit => audit.entries.first());
  let embed = new Discord.RichEmbed()
  .setAuthor(entry.executor.username, entry.executor.avatarURL)
  .addField("**Eylem**", "Emoji Oluşturma")
  .addField("**Emojiyi oluşturan kişi**", `<@${entry.executor.id}>`)
  .addField("**Oluşturulan emoji**", `${emoji} - İsmi: \`${emoji.name}\``)
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter(`Sunucu: ${emoji.guild.name} - ${emoji.guild.id}`, emoji.guild.iconURL)
  .setThumbnail(emoji.guild.iconURL)
  client.channels.get(modlog).sendEmbed(embed)
})
  client.on("emojiDelete", async(emoji) => {
  let modlog = await db.fetch(`genelmodlog_${emoji.guild.id}`);
  if (!modlog) return;
  const entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_DELETE'}).then(audit => audit.entries.first());
  let embed = new Discord.RichEmbed()
  .setAuthor(entry.executor.username, entry.executor.avatarURL)
  .addField("**Eylem**", "Emoji Silme")
  .addField("**Emojiyi silen kişi**", `<@${entry.executor.id}>`)
  .addField("**Silinen emoji**", `${emoji}`)
  .setTimestamp()
  .setFooter(`Sunucu: ${emoji.guild.name} - ${emoji.guild.id}`, emoji.guild.iconURL)
  .setColor("RANDOM")
  .setThumbnail(emoji.guild.iconURL)
  client.channels.get(modlog).sendEmbed(embed)
})

client.on("emojiUpdate", async(oldEmoji, newEmoji) => {
  let modlog = await db.fetch(`genelmodlog_${oldEmoji.guild.id}`);
  if (!modlog) return;
  const entry = await oldEmoji.guild.fetchAuditLogs({type: 'EMOJI_UPDATE'}).then(audit => audit.entries.first());
  let embed = new Discord.RichEmbed()
  .setAuthor(entry.executor.username, entry.executor.avatarURL)
  .addField("**Eylem**", "Emoji Güncelleme")
  .addField("**Emojiyi güncelleyen kişi**", `<@${entry.executor.id}>`)
  .addField("**Güncellenmeden önceki emoji**", `${oldEmoji} - İsmi: \`${oldEmoji.name}\``)
  .addField("**Güncellendikten sonraki emoji**", `${newEmoji} - İsmi: \`${newEmoji.name}\``)
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter(`Sunucu: ${oldEmoji.guild.name} - ${oldEmoji.guild.id}`, oldEmoji.guild.iconURL)
  .setThumbnail(oldEmoji.guild.iconURL)
  client.channels.get(modlog).sendEmbed(embed)
})

client.on("voiceStateUpdate", async(oldMember, newMember) => {
let modlog = await db.fetch(`genelmodlog_${oldMember.guild.id}`);
 if (!modlog) return;
  let embed = new Discord.RichEmbed()
.setAuthor(oldMember.user.username, oldMember.user.avatarURL)
 .addField("**Eylem**", "Ses kanalına girme/değiştirme")
 .addField("**Kanal değiştiren kişi**", `<@${oldMember.id}>`)
 .addField("**Şu anki bulunduğu kanal**", `${newMember.voiceChannel.name} - ${newMember.voiceChannel.id}`) 
 .setTimestamp()
  .setFooter(`Sunucu: ${oldMember.guild.name} - ${oldMember.guild.id}`, oldMember.guild.iconURL)
  .setColor("RANDOM")
  .setThumbnail(oldMember.guild.iconURL)
  client.channels.get(modlog).sendEmbed(embed)
})

client.on("guildBanAdd", async(guild, user) => {
let modlog = await db.fetch(`genelmodlog_${guild.id}`);
  if (!modlog) return;
  const entry = await guild.fetchAuditLogs({type: "MEMBER_BAN_ADD"}).then(audit => audit.entries.first());
  let embed = new Discord.RichEmbed()
  .setAuthor(entry.executor.username, entry.executor.avatarURL)
  .addField("**Eylem**", "Yasaklama")
  .addField("**Kullanıcıyı yasaklayan yetkili**", `<@${entry.executor.id}>`)
  .addField("**Yasaklanan kullanıcı**", `**${user.tag}** - ${user.id}`)
  .addField("**Yasaklanma sebebi**", `${entry.reason}`)
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter(`Sunucu: ${guild.name} - ${guild.id}`, guild.iconURL)
  .setThumbnail(guild.iconURL)
  client.channels.get(modlog).sendEmbed(embed)
})

client.on("guildBanRemove", async(guild, user) => {
let modlog = await db.fetch(`genelmodlog_${guild.id}`);
  if (!modlog) return;
  const entry = await guild.fetchAuditLogs({type: "MEMBER_BAN_REMOVE"}).then(audit => audit.entries.first());
  let embed = new Discord.RichEmbed()
  .setAuthor(entry.executor.username, entry.executor.avatarURL)
  .addField("**Eylem**", "Yasak kaldırma")
  .addField("**Yasağı kaldıran yetkili**", `<@${entry.executor.id}>`)
  .addField("**Yasağı kaldırılan kullanıcı**", `**${user.tag}** - ${user.id}`)
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter(`Sunucu: ${guild.name} - ${guild.id}`, guild.iconURL)
  .setThumbnail(guild.iconURL)
  client.channels.get(modlog).sendEmbed(embed)
})

// mod-log.js

client.on('ready', () => { client.channels.get('757949677659488267').join() }) 

client.login(ayarlar.codetoken);
