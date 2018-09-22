const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  let customemoji = client.emojis.find(r => r.name === '463763583864406056');
  let customemoji1 = client.emojis.find(r => r.name === '5458458469494794');
  if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
    if (message.author.id !== '406192153979518976') return ;
    client.user.setStatus("idle")
message.channel.send(`Done changed to **idle** ${customemoji1}`).then(message => {message.delete(20000)})
}
