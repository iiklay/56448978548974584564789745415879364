const Discord = require("discord.js");
const client = new Discord.Client();
const superagent = require('superagent');
exports.run = async (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
    let abdo = message.author.username
  var mentionned = message.mentions.users.first();
  var x5bzm;
  if(mentionned){
  var x5bzm = mentionned;
  } else {
  var x5bzm = message.author;
  
  }
  let{body} = await superagent
.get(`https://nekos.life/api/v2/img/kiss`);
var list = message.mentions.members;
if (list.first() === null || list.first() === undefined) {
  message.channel.send("Please list a user to kiss!");
 
}
else if (list.first().user.bot) {
  return message.channel.send("You can't kiss bot"); 
}
else if (list.firstKey() === message.author.id) {
 message.channel.send("You can't kiss yourself!");
}
else {
let me = new Discord.RichEmbed()
.setColor("RANDOM")
.setImage(body.url)
.setDescription(`${abdo} has been kissing ${x5bzm} 😁 😚`)
message.channel.send(me);
}
}
