const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send("<a:no1:741436672427688036> Yetkin bulunmuyor.");
  message.channel
    .send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Sunucu Kur Komutu")
        .setDescription("Gerekli Kanallar Kurulsun mu?.")
        .setFooter(
          'Bu eylemi onaylıyorsan "evet" yazman yeterlidir. Bu eylem 15 saniye içinde sona erecek'
        )
    )
    .then(() => {
      message.channel.awaitMessages(response => response.content === 'evet', {
      max: 1,
      time: 15000,
      errors: ['time'],
      }) 
      .then((collected) => { 

          message.guild.createChannel("●▬▬▬▬๑「📣」๑▬▬▬▬▬●", "category", [
            {
              id: message.guild.id
            }
          ]);

          message.guild
            .createChannel(`📚│kurallar`, "text")

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "●▬▬▬▬๑「📣」๑▬▬▬▬▬●"
                )
              )
            );
          ////////////////////////////////
          message.guild
            .createChannel(`📣│duyurular`, "text")

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "●▬▬▬▬๑「📣」๑▬▬▬▬▬●"
                )
              )
            );
          ////////////////////////////////////////
            message.guild
            .createChannel(`🌐│partner`, "text")

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "●▬▬▬▬๑「📣」๑▬▬▬▬▬●"
                )
              )
            );
          //////////////////////////////////////////

          ///////////////////////////////////////////////////////////////
          message.guild.createChannel("●▬▬▬▬๑「🌟」๑▬▬▬▬▬●", "category", [
            {
              id: message.guild.id
            }
          ]);

          message.guild
            .createChannel(`💬│sohbet`, "text")

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "●▬▬▬▬๑「🌟」๑▬▬▬▬▬●"
                )
              )
            );
          ////////////////////////////////
          message.guild
            .createChannel(`🔮│bot-komut`, "text")

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "●▬▬▬▬๑「🌟」๑▬▬▬▬▬●"
                )
              )
            );
          ////////////////////////////////
          message.guild
            .createChannel(`📷│galeri`, "text")

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "●▬▬▬▬๑「🌟」๑▬▬▬▬▬●"
                )
              )
            );
          ////////////////////////////////
          message.guild
            .createChannel(`📥│gelen-giden`, "text")

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "●▬▬▬▬๑「🌟」๑▬▬▬▬▬●"
                )
              )
            );
          ////////////////////////////////

          /////////////////////////////////////////////
          message.guild.createChannel("●▬▬▬▬๑「🏆」๑▬▬▬▬▬●", "category", [
            {
              id: message.guild.id
            }
          ]);

          message.guild
            .createChannel(`🏆│Sohbet`, "voice")

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "●▬▬▬▬๑「🏆」๑▬▬▬▬▬●"
                )
              )
            );
          ////////////////////////////////
          message.guild
            .createChannel(`🏆│Sohbet`, "voice")

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "●▬▬▬▬๑「🏆」๑▬▬▬▬▬●"
                )
              )
            );
          ////////////////////////////////
          message.guild
            .createChannel(`🏆│Sohbet`, "voice")

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "●▬▬▬▬๑「🏆」๑▬▬▬▬▬●"
                )
              )
            );
          ////////////////////////////////

          /////////////////////////////////////////////
          message.guild.createChannel("●▬▬▬▬๑「🎵」๑▬▬▬▬▬●", "category", [
            {
              id: message.guild.id
            }
          ]);

          message.guild
            .createChannel(`🎵│Music`, "voice")

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "●▬▬▬▬๑「🎵」๑▬▬▬▬▬●"
                )
              )
            );
          ////////////////////////////////
          message.guild
            .createChannel(`🎵│Music`, "voice") //sa geldim ben aşkım :)

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "●▬▬▬▬๑「🎵」๑▬▬▬▬▬●"
                )
              )
            );
          ////////////////////////////////
          message.guild
            .createChannel(`🎵│Music`, "voice")

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "●▬▬▬▬๑「🎵」๑▬▬▬▬▬●"
                )
              )
            );
          ////////////////////////////////

          /////////////////////////////////////////////
          message.guild.createChannel("●▬▬▬▬๑「🌙」๑▬▬▬▬▬●", "category", [
            {
              id: message.guild.id
            }
          ]);

          message.guild
            .createChannel(`🌉│AFK`, "voice")

            .then(channel =>
              channel.setParent(
                message.guild.channels.find(
                  channel => channel.name === "●▬▬▬▬๑「🌙」๑▬▬▬▬▬●"
                )
              )
            );
          ////////////////////////////////
          message.guild
            .createRole({
              name: `「👑」Kurucu`,
              color: "RED",
              hoist: true,
              permissions: [
                "ADMINISTRATOR",
                "MANAGE_ROLES",
                "MUTE_MEMBERS",
                "DEAFEN_MEMBERS",
                "MANAGE_MESSAGES",
                "MANAGE_NICKNAMES",
                "KICK_MEMBERS"
              ]
            })
                .then(adminrol => {
                  message.guild
                    .createRole({
                      name: `「🌠」Yardımcı.`,
                      color: "GREEN",
                      hoist: true,
                      permissions: [
                        "MANAGE_GUILD",
                        "MANAGE_ROLES",
                        "MUTE_MEMBERS",
                        "DEAFEN_MEMBERS",
                        "MANAGE_MESSAGES",
                        "MANAGE_NICKNAMES"
                      ]
                    })
                    .then(destekrol => {
                      message.guild
                        .createRole({
                          name: ` 「😇」Üye.`,
                          color: "#000000",
                          hoist: true
                        })
                        .then(destekrol => {
                          message.guild
                            .createRole({
                              name: ` 「👦🏼」Erkek.`,
                              color: "#000000",
                              hoist: true
                            })
                            .then(destekrol => {
                              message.guild
                                .createRole({
                                  name: ` 「👩」Bayan.`,
                                  color: "#000000",
                                  hoist: true
                                })
                            .then(özelrol => {
                              message.guild.createRole({
                                hoist: true,
                                name: `「🎭」Yapay Zeka.`,
                                color: "GREEN"
                              });
                            });
                        });
                    });
                });
            });
          });
        });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: "sunucu-kur",
  description: "Bot İçin gerekli kanlları kurar.",
  usage: "sunucu-kur"
};