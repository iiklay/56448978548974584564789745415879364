const Discord = require("discord.js");
const client = new Discord.Client();
const superagent = require('superagent');
const cooldown = new Set()
exports.run = async (client, message, args) => {
          if (cooldown.has(message.author.id)) {
    return message.reply("Please wait 5 seconds a next command").then(message => {
     message.delete(5000) 
    })
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
        let customemoji = client.emojis.find(r => r.name === '463763583864406056');
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
  let{body} = await superagent
  .get(`https://sheri.fun/api/v1/mur`);
  let me = new Discord.RichEmbed()
  .setColor("BLACK")
  .setImage(body.url);
  message.channel.send(me);
    }
