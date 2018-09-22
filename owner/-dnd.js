const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  let customemoji = client.emojis.find(r => r.name === '463763583864406056');
  let customemoji1 = client.emojis.find(r => r.name === '548549654894547');
  if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
  if (message.author.id !== '406192153979518976') return ;
  client.user.setStatus("dnd")
message.channel.send(`Done changed to **den** ${customemoji1}`).then(message => {message.delete(20000)})
}
