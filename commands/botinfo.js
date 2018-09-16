const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
    message.channel.send({
      embed: new Discord.RichEmbed()
     .setAuthor(client.user.username,client.user.avatarURL)
     .setThumbnail(client.user.displayAvatarURL + ".png")
     .setColor(message.guild.me.highestRole.color) 
     .setTitle(`Information About ${client.user.username}`)
     .addField('Ping The bot' , `${Date.now() - message.createdTimestamp}` + 'MS', true)
     .addField('RAM Usage', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
     .addField('Guilds', client.guilds.size, true)
     .addField('Text Channels',` ${message.guild.channels.filter(m => m.type === 'text').size}`,true)
     .addField('Voice Channels',` ${message.guild.channels.filter(m => m.type === 'voice').size} `,true)
     .addField('Users' ,` ${client.users.size} ` , true)
     .addField('My Name' , ` ${client.user.tag} ` , true)
     .addField('My ID' , ` ${client.user.id} ` , true)
     .addField('Voice Connections' ,`${client.voiceConnections.size}` , true)
     .addField('My Prefix' , `[ - ]` , true)
     .addField('My Language' , `[ Java Script ]` , true)
     .setFooter('Creator ID: abdo#1889')
     .setTimestamp()
  })
  }
