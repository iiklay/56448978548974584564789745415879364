const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  const embed = new Discord.RichEmbed()
  .setTitle(`Photo: ${message.guild.name}`)
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setColor(message.guild.me.highestRole.color) 
  .setImage(message.guild.iconURL)
  .setURL(message.guild.iconrURL)
  .setFooter(`Requested by ${message.author.username}`)
 message.channel.send({embed});
}
