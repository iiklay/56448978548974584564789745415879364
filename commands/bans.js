const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
        let customemoji = client.emojis.find(r => r.name === '463763583864406056');
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply('You do not have Permission `ADMINISTRATOR`⚠').then(message => message.delete(35000));
    message.guild.fetchBans()
    .then(bans => message.channel.send(`\n\n\`\`\`autohotkey
${bans.size} Banned members from the server\`\`\``))
.catch(console.error);
}
