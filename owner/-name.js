const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  const devs = ['406192153979518976' , '' , '' , ''];
  var argresult = message.content.split(` `).slice(1).join(' ');
  if (!devs.includes(message.author.id)) return;
  client.user.setUsername(argresult).then
  message.channel.sendMessage(`has been changed name to **${argresult}**`);
  }
