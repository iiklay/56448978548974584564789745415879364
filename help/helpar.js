const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
if(!message.channel.guild) return message.reply('this command is for guilds only!');
let abdo = new Discord.RichEmbed()
.setColor(message.guild.me.highestRole.color) 
.setAuthor(message.author.username+`#${message.author.discriminator}`,message.author.displayAvatarURL)
.addField('-adminar :tools:','الاوامر المشرفين',true)
.addField('-info 📚','معلومات عامة',true)    
.addField('-fun :circus_tent:','الاوامر الممتعة',true)    
.addField('-music :notes:','الاوامر الموسيقى',true)  
.addField('-text 🈂','أوامر نصية',true)   
.addField('-Image :camera:','أوامر الصور',true)   
.setFooter(client.user.username,client.user.displayAvatarURL)   
message.channel.send(abdo);
}
