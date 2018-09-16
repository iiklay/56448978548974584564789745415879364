const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  let embed = new Discord.RichEmbed()
  .setColor(message.guild.me.highestRole.color) 
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setThumbnail(message.guild.iconURL)
  .addField(`Name the server`,`${message.guild.name}`,true)
  .addField(`Emojis`,` ${message.guild.emojis.size}`,true)
  .addField('Server Type',`${message.guild.region}`,true)
  .addField('Roles',`${message.guild.roles.size}`,true)
  .addField('All members',`${message.guild.memberCount}`,true)
  .addField('Members online',`${message.guild.members.filter(m=>m.presence.status == 'online').size}`,true)
  .addField('Text Channels',`${message.guild.channels.filter(m => m.type === 'text').size}`,true)
  .addField('Sound Channels',`${message.guild.channels.filter(m => m.type === 'voice').size}`,true)
  .addField('Created server in',message.guild.createdAt.toLocaleString(),true)
  .addField('ID server',`${message.guild.id}`,true)
  .addField('Onwer',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`,true)
  .addField('Rooms Size',`${message.guild.channels.size}`,true)
  .setFooter(`Requested by ${message.author.username}`)
  .setTimestamp()
  message.channel.send({embed:embed});
}




  
