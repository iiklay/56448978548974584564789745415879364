const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  var mentionned = message.mentions.users.first();
  var x5bzm;
  if(mentionned){
  var x5bzm = mentionned;
  } else {
  var x5bzm = message.author;
  
  }
  const embed = new Discord.RichEmbed()
  .setColor(message.guild.me.highestRole.color) 
  .setDescription(`this is avatar for **${x5bzm.avatarURL,x5bzm.tag}**`)
  .setTimestamp()
  .setImage(`${x5bzm.displayAvatarURL}`)
  .setFooter(`BY : ${message.author.username}`)
  message.channel.sendEmbed(embed);
   }
