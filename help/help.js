const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
 if(!message.channel.guild) return message.reply(`this command is for guilds only!`);
  message.delete()
    let customemoji6 = client.emojis.find(r => r.name === '846854654886464186');
    let customemoji1 = client.emojis.find(r => r.name === '5449874894189564');
    let customemoji2 = client.emojis.find(r => r.name === '547984894654964564');
    let customemoji3 = client.emojis.find(r => r.name === '54848408689447894');
    let customemoji4 = client.emojis.find(r => r.name === '5498478456848947897');
    let customemoji5 = client.emojis.find(r => r.name === '5648648665461654646');
  let abdo = new Discord.RichEmbed()
  .setColor(message.guild.me.highestRole.color) 
  .setAuthor(message.author.username+`#${message.author.discriminator}`,message.author.displayAvatarURL)
  .addField(`-admin ${customemoji3}`,'commands admins',true)
  .addField(`-info ${customemoji2}`,'info commands',true)   
  .addField(`-fun ${customemoji1}`,'fun commands',true)   
  .addField(`-music ${customemoji4}`,'music commands',true)   
  .addField(`-text ${customemoji5}`,'text commands',true)   
  .addField(`-helpar ${customemoji6}`,'للمساعدة باللغة العربية',true)   
  .setFooter(client.user.username,client.user.displayAvatarURL) 
  .setTimestamp()
  message.channel.send(abdo);
  }
