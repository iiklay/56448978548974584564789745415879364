const Discord = require("discord.js");
const client = new Discord.Client();
const superagent = require('superagent');
exports.run = async (client, message, args) => {
        let customemoji = client.emojis.find(r => r.name === '463763583864406056');
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
  let{body} = await superagent
  .get(`https://randomfox.ca/floof/`);
  let me = new Discord.RichEmbed()
  .setTitle("🦊 Fox incoming")
  .setColor("BLACK")
  .setImage(body.image);
  message.channel.send(me);
  }
