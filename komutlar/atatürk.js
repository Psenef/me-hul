const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setAuthor("❤️ Mustafa Kemal Atatürk ❤️ \n")
        .setURL('')
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setImage("https://66.media.tumblr.com/99acc6e97dd6d2c488f37be8463a8d2d/tumblr_oqu4djgOHU1qk8rzpo1_500.gif")
  .setFooter("2018 | MEÇHUL", "")
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'atam',
  description: 'Botun Atatürk  Sistemi.',
  usage: 'atam'
};
