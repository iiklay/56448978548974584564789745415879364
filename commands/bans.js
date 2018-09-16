const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply('You do not have Permission `ADMINISTRATOR`⚠').then(message => message.delete(35000));
    message.guild.fetchBans()
    .then(bans => message.channel.send(`\n\n\`\`\`autohotkey
${bans.size} Banned members from the server\`\`\``))
.catch(console.error);
}
