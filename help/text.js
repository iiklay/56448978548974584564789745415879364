const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
        let customemoji = client.emojis.find(r => r.name === '463763583864406056');
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
  let embed = new Discord.RichEmbed()
.setColor(message.guild.me.highestRole.color) 
.setAuthor(message.author.username+`#${message.author.discriminator}`,message.author.displayAvatarURL)
.addField("🈂 text commands 👏" , "tag1, tag2, tag3, tag4, mo, say, sayembed, te, emoji, mat, date")
.setFooter(`if you want more information say -helptext`)
.setTimestamp()
  message.channel.sendEmbed(embed);
}
