const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
        let customemoji = client.emojis.find(r => r.name === '463763583864406056');
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
  let embed = new Discord.RichEmbed()
.setColor(message.guild.me.highestRole.color) 
.setAuthor(message.author.username+`#${message.author.discriminator}`,message.author.displayAvatarURL)
.addField(":circus_tent: fun commands 👏" , "catgif, fox, cat, garo, rabbits, dog, how gay, rip, shit, slap, gifslap, hug, punch, kill, anime, poke, cuddle, pat, kiss, tickle, memes, ask, otaku, any, gay, nik")
.setFooter(`if you want more information say -helpfun`)
.setTimestamp()
  message.channel.sendEmbed(embed);
}
