const Discord = require("discord.js");
const client = new Discord.Client();
const superagent = require('superagent');
const cooldown = new Set()
exports.run = async (client, message, args) => {
          if(message.author.bot) return;
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
  let color = '0xffffff'
const { body } = await superagent
.get('https://yesno.wtf/api/');
if(body.answer === 'yes') color = '0x01DF01';
if(body.answer === 'no') color = '0xFF0000';
const embed = new Discord.RichEmbed()
.setColor(color)
.setImage(`${body.image}`)
message.channel.send(`**i say 🤔** **${body.answer}**`, {embed});
}
