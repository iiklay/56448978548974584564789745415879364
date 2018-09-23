const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
        let customemoji = client.emojis.find(r => r.name === '463763583864406056');
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
  message.channel.send('ok').then(msg => {
    setTimeout(() => {
            msg.edit('🚬');
        }, 500);
        setTimeout(() => {
            msg.edit('🚬 ☁ ');
        }, 700);
        setTimeout(() => {
            msg.edit('🚬 ☁☁ ');
        }, 900);
        setTimeout(() => {
            msg.edit('🚬 ☁☁☁ ');
        }, 1000);
        setTimeout(() => {
            msg.edit('🚬 ☁☁☁');
        }, 1100);
        setTimeout(() => {
            msg.edit('🚬 ☁☁');
        }, 1200);
        setTimeout(() => {
            msg.edit('🚬 ☁');
        }, 1300);
        setTimeout(() => {
            msg.edit('🚬');
        }, 1400);
    });
    }    	
