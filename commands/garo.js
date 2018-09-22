const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
        let customemoji = client.emojis.find(r => r.name === '463763583864406056');
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
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
