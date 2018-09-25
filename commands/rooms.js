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


  
