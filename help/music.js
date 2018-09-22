const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
        let customemoji = client.emojis.find(r => r.name === '463763583864406056');
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
  let embed = new Discord.RichEmbed()
.setColor(message.guild.me.highestRole.color) 
.setAuthor(message.author.username+`#${message.author.discriminator}`,message.author.displayAvatarURL)
.addField("🎶 music commands 👏" , "play, pause, resume, stop, skip, queue, volume, about")
.setFooter(`if you want more information say -helpmusic`)
.setTimestamp()
  message.channel.sendEmbed(embed);
}
