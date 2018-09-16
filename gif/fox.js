const Discord = require("discord.js");
const client = new Discord.Client();
const superagent = require('superagent');
exports.run = async (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  let{body} = await superagent
  .get(`https://randomfox.ca/floof/`);
  let me = new Discord.RichEmbed()
  .setTitle("🦊 Fox incoming")
  .setColor("BLACK")
  .setImage(body.image);
  message.channel.send(me);
  }