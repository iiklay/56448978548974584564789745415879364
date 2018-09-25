const Discord = require("discord.js");
const client = new Discord.Client();
const superagent = require('superagent');
const cooldown = new Set()
exports.run = async (client, message, args) => {
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
  
    let abdo = message.author.username
  var mentionned = message.mentions.users.first();
  var x5bzm;
  if(mentionned){
  var x5bzm = mentionned;
  } else {
  var x5bzm = message.author;
  
  }
  
  let{body} = await superagent
.get(`https://nekos.life/api/v2/img/hug`);
var list = message.mentions.members;
if (list.first() === null || list.first() === undefined) {
  message.channel.send("Please list a user to hug!");
 
}
else if (list.first().user.bot) {
  return message.channel.send("You can't hug bot"); 
}
else if (list.firstKey() === message.author.id) {
 message.channel.send("You can't hug yourself!");
}
else {
let me = new Discord.RichEmbed()
.setColor("RANDOM")
.setImage(body.url)
.setDescription(`${abdo} has been hugged ${x5bzm} ❤ 😍`)
message.channel.send(me);
}
}
