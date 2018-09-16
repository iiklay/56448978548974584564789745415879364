const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  let embed = new Discord.RichEmbed()
.setColor(message.guild.me.highestRole.color) 
.setAuthor(message.author.username+`#${message.author.discriminator}`,message.author.displayAvatarURL)
.setFooter(`ID: ${message.author.username}#${message.author.discriminator}`)
 .addField("📚 info commands 👏" , "meteo, uptame, bots, rooms, count, invite, serverpic server, avatar, ping, botinfo, support, bcowner, myid, userinfo")
.setFooter(`if you want more information say -helpinfo`)
.setTimestamp()
  message.channel.sendEmbed(embed);
}
