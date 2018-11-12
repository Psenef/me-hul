const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "Sponsorluk - Parnetlik Şartları",
                  },
                description: "**● Sunucu İçerisinde Huzurlu Bir Ortam Yaratmak \n ● Sunucu İçerisindeki İletişimi Artırmak,Güzelleştirmek \n ● Kurallara Aykırı Hareket Eden Kullanıcıları Naif Bir Dil İle Uyarmak \n ● Öneri ve Düşüncelerini İletmek \n ● Raporları Eksiksiz İletmek **"

              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot', 'bot'],
  permLevel: 0
};

exports.help = {
  name: 'partner',
  description: 'partnerlik hakkında bilgi verir',
  usage: 'partner'
};
