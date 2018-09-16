const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  message.channel.send('ok').then(msg => {
    setTimeout(() => {
      msg.edit(`🚬💨💨💨`);
     },1500);
     setTimeout(() => {
      msg.edit(`🚬💨💨`);
    },1800);
    setTimeout(() => {
    msg.edit(`🚬💨`);
    },2100);
    setTimeout(() => {
    msg.edit(`🚬`)
    },2400);
    });
    }    	