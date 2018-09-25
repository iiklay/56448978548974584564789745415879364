const Discord = require("discord.js");
const gifSearch = require("gif-search");
const cooldown = new Set()
exports.run = (bot, message, argss) => {
  if (message.author.bot) return;
  	if (cooldown.has(message.author.id)) {
return message.reply("Please wait 5 seconds a next command").then(message => {
message.delete(5000) 
})
}
cooldown.add(message.author.id);
setTimeout(() => {
  cooldown.delete(message.author.id);
}, 10000);
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
