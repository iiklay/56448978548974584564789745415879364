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
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  message.delete().then()
  let argss = message.content.split(" ").slice(1).join(" ");
if(!argss) return;
let embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`${argss}`)
message.channel.send(embed);
}
