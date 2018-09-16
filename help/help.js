const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
if(!message.channel.guild) return message.reply('this command is for guilds only!');
let abdo = new Discord.RichEmbed()
.setColor(message.guild.me.highestRole.color) 
.setAuthor(message.author.username+`#${message.author.discriminator}`,message.author.displayAvatarURL)
.addField('-admin 🔨','commands admins',true)
.addField('-info 📚','info commands',true)   
.addField('-fun :circus_tent:','fun commands',true)   
.addField('-music :notes:','music commands',true)   
.addField('-text 🈂','text commands',true)   
.addField('-helpar 💬','للمساعدة باللغة العربية',true)   
.setFooter(client.user.username,client.user.displayAvatarURL) 
.setTimestamp()
message.channel.send(abdo);
}
