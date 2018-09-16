const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, argss) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  let args = message.content.split(' ').slice(1).join(' ');
  if (message.author.id !== '406192153979518976') return message.reply('ًًSorry but this command for owner bot only')
  if(!message.author.id === '406192153979518976') return;
  message.channel.sendMessage('Done sent message...')
  client.users.forEach(m =>{
  m.sendMessage(args)
  })
  }
