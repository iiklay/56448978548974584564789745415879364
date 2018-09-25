const Discord = require("discord.js");
const client = new Discord.Client();
const cooldown = new Set()
exports.run = (client, message, args) => {
          if(message.author.bot) return;
          if (cooldown.has(message.author.id)) {
    return message.reply("Please wait 5 seconds a next command").then(message => {
     message.delete(5000) 
    })
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
        let customemoji = client.emojis.find(r => r.name === '463763583864406056');
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
  if (message.author.id !== '406192153979518976') return message.reply('sorry but this command for owner 😪');
    message.channel.send({
      embed: new Discord.RichEmbed()
     .setAuthor(client.user.username,client.user.avatarURL)
     .setThumbnail(client.user.displayAvatarURL + ".png")
     .setColor(message.guild.me.highestRole.color) 
     .setTitle(`Information About ${client.user.username}`)
     .addField('Ping The bot' , `${Date.now() - message.createdTimestamp}` + 'MS', true)
     .addField('RAM Usage', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
     .addField('Guilds', client.guilds.size, true)
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
