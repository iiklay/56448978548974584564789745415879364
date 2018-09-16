const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  if (message.author.bot) return;
      let i = 1;
      const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
      const embed = new Discord.RichEmbed()
 .setColor(message.guild.me.highestRole.color) 
 .setAuthor(message.author.tag, message.author.avatarURL)
 .addField(`Found **${message.guild.members.filter(m=>m.user.bot).size}** bot in this Server `,`  ${botssize.join('\n')}`)
 .setFooter(client.user.username, client.user.avatarURL)
 .setTimestamp();
 message.channel.send(embed)
 
 }
