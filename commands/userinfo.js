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
var abdo = message.mentions.members.first();
var aaa;
if(abdo){
var aaa = abdo;
} else {
var aaa = message.member;
}
if (x5bzm.presence.game !== null) {
  y = `${x5bzm.presence.game.name}`;
  } else {
  y = "No Game";
  }
  if (x5bzm.bot) {
    var m = 'Bot';
    }else {
    var m = 'Member';
    }
    let status = x5bzm.presence.status;     
    if (status === 'online') {
      status = 'Online 💚';
    }
    else if (status === 'idle') {
      status = 'Idle 💛';
    }
    else if (status === 'dnd') {
      status = 'Do Not Disturb ❤';
    }
    else if (status === 'offline') {
      status = 'Offline 💨';
    }
var rolesname = message.guild.members.get(aaa.id).roles.map(role => `${role.name} .  `).slice(1).join(' ')
if (!rolesname) {
  rolesname = 'No role';
}
var rolesize = message.guild.members.get(aaa.id).roles.size -1
let nick = x5bzm.nickname;
if (!nick) {
  nick = 'No nick';
}
  let embed = new Discord.RichEmbed()
  .setColor(message.guild.me.highestRole.color) 
  .setThumbnail(x5bzm.displayAvatarURL)
  .addField('Name',`**${x5bzm.username}**#${x5bzm.discriminator}`, true)
  .addField('ID',`${x5bzm.id}`,true)
  .addField("Joined server", message.member.joinedAt.toLocaleString(), true)    
  .addField('Joined Discord', message.author.createdAt.toLocaleString(), true)
  .addField('Playing',''+y+'' , true)
  .addField('Account', `is ${m}`, true)
  .addField('Status', `${status}`, true)
  .addField('Nick', `${nick}`, true)
  .addField(`Roles **[${rolesize}]**`,`${rolesname}`)
   message.channel.send(embed);  
  }
