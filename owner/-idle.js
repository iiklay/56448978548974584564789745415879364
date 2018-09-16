const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
    if (message.author.id !== '406192153979518976') return message.reply('sorry but this command for owner 😪')
    client.user.setStatus("idle")
message.channel.send(`Done changed to **idle** 🧡`).then(message => {message.delete(20000)})
}
