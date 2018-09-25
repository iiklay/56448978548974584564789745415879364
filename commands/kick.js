const Discord = require("discord.js");
const client = new Discord.Client();
const cooldown = new Set()
exports.run = (client, message, args) => {
    if (cooldown.has(message.author.id)) {
    return message.reply("Please wait 5 seconds a next command").then(message => {
     message.delete(5000) 
    })
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
  message.delete(11000);
  let customemoji = client.emojis.find(r => r.name === '463763583864406056');
  if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply('You do not have Permission `KICK_MEMBERS` ⚠').then(message => message.delete(10000));
if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply('**Bot** does not have Permission `KICK_MEMBERS`').then(message => message.delete(10000));
let customemoji5 = client.emojis.find(r => r.name === '488778606382940160');
let customemoji1 = client.emojis.find(r => r.name === '97976489784694');
let user = message.mentions.users.first();
let user1 = message.mentions.users.first();
let reason = message.content.split(' ').slice(2).join(" ");  
if (!reason) {
  reason = 'without reason';
}
if (message.mentions.users.size < 1) return message.reply('You did not mention any users').then(message => message.delete(10000));
var userM = message.guild.member(message.mentions.users.first());
if(userM.id === message.author.id) return message.reply("You can not kick yourself").then(m => m.delete(10000));
if(userM.id === message.guild.owner.id) return message.reply(`You can not kick the owner ${customemoji5}`).then(message => message.delete(10000));
if(message.guild.member(userM.user).hasPermission("ADMINISTRATOR")) return message.reply('This user has Permission `ADMINISTRATOR`').then(m => m.delete(10000));
if (!message.guild.member(user)
.kickable) return message.reply('bot dont have Permission').then(message => message.delete(10000));
message.guild.member(user).kick();
message.channel.send(`${customemoji1} **${message.author.username}** has been Kicked <@${user.id}>`)
message.channel.sendEmbed();
if(!message.guild.channels.find('name', 'logs')) return message.channel.send('make channel named **logs** To receive logs').then(msg => msg.delete(10000));
const wunmuteembed = new Discord.RichEmbed()
.setColor(message.guild.me.highestRole.color) 
.setAuthor(`Member kicked!`, user.displayAvatarURL)
.setThumbnail(user1.displayAvatarURL)
.addField("User",`${user1.tag}`,true)
.addField("kicked by",`${message.author.tag}`,true)
.addField("Reason",`${reason}`,true)
.setTimestamp()
message.guild.channels.find('name', 'logs').sendEmbed(wunmuteembed)
var unmuteembeddm = new Discord.RichEmbed()
.setDescription(`You has been kicked from **${message.guild.name}** Reason **${reason}** `)
.setColor("#ff0000")
  user.send(unmuteembeddm);
}
