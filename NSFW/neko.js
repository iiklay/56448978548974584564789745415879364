const Discord = require("discord.js");
const client = new Discord.Client();
const superagent = require('superagent');
exports.run = async (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  console.log(message.channel.nsfw); // false
var pus = new Discord.RichEmbed()
.addField('NSFW not allowed here','Use NSFW commands in a NSFW marked channel (look in channel settings, dummy)')
.setImage('https://images-ext-2.discordapp.net/external/hiWbEzhiEXfFaza5khoxg3mR3OWeugZwWo8vGxK8LzA/https/i.imgur.com/oe4iK5i.gif')
if (message.channel.nsfw === false)    return message.channel.send(pus);
let{body} = await superagent
.get(`https://sheri.fun/api/v1/yiff`);
let me = new Discord.RichEmbed()
.setColor("BLACK")
.setImage(body.url);
message.channel.send(me);
}