const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  var cats = [
 
    "https://i.imgur.com/BZhCIrX.gif",
    "https://i.imgur.com/VkCWPV2.gif",
    "https://i.imgur.com/3X9dmME.gif",
    "https://i.imgur.com/Gd2pPvf.gif",
    "https://i.imgur.com/S8b93f1.gif",
    "https://i.imgur.com/K8IuaSM.gif",
    "https://i.imgur.com/YB3y4MT.gif",
    "http://i.imgur.com/OTAeXcf.jpg",
    "http://i.imgur.com/ZYn8zWH.jpg",
    "http://i.imgur.com/piDWdUz.jpg",
    "https://i.imgur.com/aZtGZHN.gif",
    "https://i.imgur.com/TBShA0f.gif",
    "https://i.imgur.com/1I5LTqm.gif",
    "https://i.imgur.com/KDOE0hn.gif",
    "https://i.imgur.com/1iVFb8H.gif",
    "https://i.imgur.com/N8ShK7X.gif",
    "https://i.imgur.com/OlNdzhV.gif",
    "https://i.imgur.com/4mBnmEy.gif",
    "https://i.imgur.com/TPinfUc.gif",
    "http://24.media.tumblr.com/tumblr_lxyk6s455e1qb73tpo1_400.gif",
  "http://25.media.tumblr.com/tumblr_m43h4dqf0P1r12rv0o1_400.gif",
  "http://25.media.tumblr.com/tumblr_m4nhdbDmpA1rn1j59o1_1280.jpg",
  "http://25.media.tumblr.com/tumblr_m1ut9j8Zai1qddbvio1_500.jpg",
  "http://25.media.tumblr.com/tumblr_m2l3hbaV0H1r7pch0o1_1280.jpg",
  "http://24.media.tumblr.com/Jjkybd3nS9i7fdgujDbNAUZ4_500.jpg",
  "http://24.media.tumblr.com/GxlDeM8kxl6gszkaC1RgD776o1_1280.jpg",
  "http://24.media.tumblr.com/tumblr_m02prljjoW1qjev1to1_500.jpg",
  "http://25.media.tumblr.com/qgIb8tERin3ivuzjyjckTw81o1_500.jpg",
  "http://24.media.tumblr.com/tumblr_m3xd8iJBUS1qbzu9co1_500.jpg",
  "http://25.media.tumblr.com/tumblr_m2xmcvjddo1qejbiro1_1280.jpg",
  "http://25.media.tumblr.com/tumblr_lzyrm0d43B1qz5dg8o1_1280.jpg",
  "http://25.media.tumblr.com/tumblr_m91zerfWvj1qdlh1io1_500.gif",
  "http://24.media.tumblr.com/tumblr_lre5r3klfo1r363f1o1_1280.jpg",
  "http://24.media.tumblr.com/tumblr_m0jbyzmDzi1qzv52ko1_1280.jpg",
  "http://27.media.tumblr.com/tumblr_lzyp4rHLqo1qzv52ko1_1280.jpg",
  "http://25.media.tumblr.com/tumblr_lzqenfqxJw1qd5euro1_1280.jpg",
  "http://25.media.tumblr.com/tumblr_loq2s4WIhd1qmhgtro1_400.jpg",
  "http://25.media.tumblr.com/tumblr_m3msylztR51r73wdao1_400.jpg",
  "http://25.media.tumblr.com/tumblr_lyufg8UKQ51qgg1s9o1_500.jpg",
  ]
          var args = message.content.split(" ").slice(1);
           var cat = new Discord.RichEmbed()
           .setColor('BLACK')
  .setImage(cats[Math.floor(Math.random() * cats.length)])
  message.channel.sendEmbed(cat);
}