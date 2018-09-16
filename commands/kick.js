const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
if(!message.channel.guild) return message.reply('this command is for guilds only!');
if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply('You do not have Permission `KICK_MEMBERS` ⚠')
if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply('**Bot** does not have Permission `KICK_MEMBERS`')
let user = message.mentions.users.first();
let user1 = message.mentions.users.first();
let reason = message.content.split(' ').slice(2).join(" ");  
if (!reason) {
  reason = 'No reason provided';
}
if (message.mentions.users.size < 1) return message.reply('<@Username>').then(message => message.delete(35000));

var userM = message.guild.member(message.mentions.users.first());
if(userM.id === message.author.id) return message.reply("you i can't kick yourself").then(m => m.delete(5000));
if(userM.id === message.guild.owner.id) return message.reply("xD really you want kick owner");
if(message.guild.member(userM.user).highestRole.position >= message.guild.member(message.member).highestRole.position) 
return message.reply(`You cant give **${userM.user.username}** kick beacuse him role highest then your role!`);
if(message.guild.member(userM.user).highestRole.position >= message.guild.member(client.user).highestRole.position) 
return message.reply(`I cant give **${userM.user.username}** kick beacuse him role highest then my role!`);

if (!message.guild.member(user)
.kickable) return message.reply('bot dont have Permission').then(message => message.delete(35000));
message.guild.member(user).kick();
message.channel.send(`👏 **${message.author.username}** has been Kicked 👢 <@${user.id}>`)
message.channel.sendEmbed();

if(!message.guild.channels.find('name', 'logs')) return message.channel.send('make channel named **logs** To receive logs').then(msg => msg.delete(5000));

const wunmuteembed = new Discord.RichEmbed()
.setColor(message.guild.me.highestRole.color) 
.setAuthor(`member kicked!`, user.displayAvatarURL)
.setThumbnail(user1.displayAvatarURL)
.addField("User",`${user1.tag}`,true)
.addField("kicked by",`${message.author.tag}`,true)
.addField("Reason",`${reason}`,true)
.setTimestamp()
message.guild.channels.find('name', 'logs').sendEmbed(wunmuteembed)

var unmuteembeddm = new Discord.RichEmbed()
.setDescription(`You has been kicked from ${message.guild.name} **${reason}** `)
.setColor("#ff0000")
  user.send(unmuteembeddm);
}
