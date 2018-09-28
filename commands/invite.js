const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, argds) => {
if(message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor('Get me on your server!')
.setTitle('__**Click to invite me to your server.**__')
.setURL('https://discordapp.com/oauth2/authorize?client_id=464139412251344897&scope=bot&permissions=8')
message.channel.sendEmbed(embed);
}