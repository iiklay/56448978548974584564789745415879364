const Discord = require("discord.js");
const client = new Discord.Client();
const superagent = require('superagent');
exports.run = async (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  let{body} = await superagent
  .get(`https://sheri.fun/api/v1/mur`);
  let me = new Discord.RichEmbed()
  .setColor("BLACK")
  .setImage(body.url);
  message.channel.send(me);
    }