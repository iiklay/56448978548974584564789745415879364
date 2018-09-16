const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply('You do not have Permission ⚠').then(msg => {
    setTimeout(() => {
      msg.edit(`don't try again 👌`);
   },1500);
  });
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send('**Bot** does not have Permission ').then(msg => {
    setTimeout(() => {
      msg.edit('You should give bot a good role and try again ok');
   },1500);
  });
  message.channel.overwritePermissions(message.guild.id, {
  SEND_MESSAGES: false
  }).then(() => {
  message.channel.send("Chat closed 🔓")
  .then(msg => {
    setTimeout(() => {
      msg.edit(`Chat closed 🔐`);
   },500);
  });
  });
  }
