const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  let embed = new Discord.RichEmbed()
.setColor(message.guild.me.highestRole.color) 
.setAuthor(message.author.username+`#${message.author.discriminator}`,message.author.displayAvatarURL)
.addField(":circus_tent: fun commands 👏" , "catgif, fox, cat, garo, rabbits, dog, slap, hug, punch, kill, anime, poke, cuddle, pat, kiss, tickle, memes, ask, otaku, any, gay, nik")
.setFooter(`if you want more information say -helpfun`)
.setTimestamp()
  message.channel.sendEmbed(embed);
}
