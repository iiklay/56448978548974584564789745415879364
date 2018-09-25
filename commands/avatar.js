const Discord = require('discord.js');
const client = new Discord.Client();
const sm = require('string-similarity'); 
const cooldown = new Set()
exports.run = (client, message, argss,) => { 
    if (cooldown.has(message.author.id)) {
    return message.reply("Please wait 5 seconds a next command").then(message => {
     message.delete(5000) 
    })
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
var args = message.content.split(' ').slice(1); 
let members = [];
let indexes = [];
message.guild.members.forEach(function(member){
  members.push(member.user.tag + member.user.id)
  indexes.push(member.id);
})
let match = sm.findBestMatch(args.join(' '), members);
let username = match.bestMatch.target;
let member = message.guild.members.get(indexes[members.indexOf(username)])
let usernameUser = '';
let UserMention = '';

if(!args[0]) {
  usernameUser = message.author
  UserMention = message.member
} else {
let mention = message.mentions.users.first()
  usernameUser = mention || member.user
  UserMention = message.mentions.members.first() || message.guild.members.get(args[0]) || member
}
message.channel.send({embed: new Discord.RichEmbed()
.setDescription(`this is avatar for **${usernameUser.tag}**`)
.setColor(message.guild.me.highestRole.color) 
.setImage(usernameUser.displayAvatarURL)
.setFooter(`BY : ${message.author.tag}`)
})
};
