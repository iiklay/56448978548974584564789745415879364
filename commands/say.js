const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  message.delete().then()
  let argss = message.content.split(" ").slice(1).join(" ");
if(!argss) return;
message.channel.send(`🤔 ${argss}`);
}
