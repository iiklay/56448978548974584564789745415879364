const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
        let customemoji = client.emojis.find(r => r.name === '463763583864406056');
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
  let embed = new Discord.RichEmbed()
.setColor(message.guild.me.highestRole.color) 
.setAuthor(message.author.username+`#${message.author.discriminator}`,message.author.displayAvatarURL)
.setFooter(`ID: ${message.author.username}#${message.author.discriminator}`)
 .addField("📚 info commands 👏" , "meteo, uptame, bots, rooms, count, invite, serverpic server, avatar, ping, botinfo, support, bcowner, myid, userinfo")
.setFooter(`if you want more information say -helpinfo`)
.setTimestamp()
  message.channel.sendEmbed(embed);
}
