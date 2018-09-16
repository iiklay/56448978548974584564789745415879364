const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  let embed = new Discord.RichEmbed()
.setColor(message.guild.me.highestRole.color) 
.setAuthor(message.author.username+`#${message.author.discriminator}`,message.author.displayAvatarURL)
.addField("🈂 text commands 👏" , "tag1, tag2, tag3, tag4, mo, say, sayembed, te, emoji, mat, date")
.setFooter(`if you want more information say -helptext`)
.setTimestamp()
  message.channel.sendEmbed(embed);
}