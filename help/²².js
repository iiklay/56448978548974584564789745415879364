const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
        let customemoji = client.emojis.find(r => r.name === '463763583864406056');
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
   if (message.author.id !== '406192153979518976') return ;
message.delete();
   message.channel.send(message.content.split(" ").join(" ").slice(5));     
};
