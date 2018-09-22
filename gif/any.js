const Discord = require("discord.js");
const client = new Discord.Client();
const superagent = require('superagent');
exports.run = async (client, message, args) => {
        let customemoji = client.emojis.find(r => r.name === '463763583864406056');
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
  let{body} = await superagent
  .get(`https://api-to.get-a.life/meme`);
  let me = new Discord.RichEmbed()
  .setColor("BLACK")
  .setImage(body.url);
  message.channel.send(me);
  }
