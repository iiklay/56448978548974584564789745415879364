const Discord = require("discord.js");
const gifSearch = require("gif-search");
exports.run = (bot, message, argss) => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  let args = message.content.split(' ').slice(1); 
    if (!args[0]) return message.channel.send("-gif <gname>");
    gifSearch.random(args[0]).then(
        gifUrl => {
        let randomcolor = ((1 << 24) * Math.random() | 0).toString(16) //Optional
        var embed = new Discord.RichEmbed()
            .setColor(`#${randomcolor}`)
            .setImage(gifUrl)
        message.channel.send(embed);
    });
}