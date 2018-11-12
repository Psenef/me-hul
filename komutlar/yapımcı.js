const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "Discord Bot Yapımcısı",
                  },
                description: "**Psenef-Barış**"
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot', 'bot'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcı',
  description: 'yapımcı',
  usage: 'Yapımcı'
};
