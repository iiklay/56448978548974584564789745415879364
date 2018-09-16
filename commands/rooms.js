const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  if (message.author.bot) return
  if (!message.guild) return;
  var channels = message.guild.channels.map(channels => `${channels.name} - `).join(' ')
  const embed = new Discord.RichEmbed()
  .setColor(message.guild.me.highestRole.color) 
  .addField(`${message.guild.name}`,`How many rooms are in this server 📜`)
  .addField('Rooms Number',`${message.guild.channels.size} room in the server`)
  .addField('Rooms Name',`${channels}`)
  .setFooter(`Requested by ${message.author.username}`)
  message.channel.sendEmbed(embed);
}


  
