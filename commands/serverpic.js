const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
        let customemoji = client.emojis.find(r => r.name === '463763583864406056');
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
  const embed = new Discord.RichEmbed()
  .setTitle(`Photo: ${message.guild.name}`)
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setColor(message.guild.me.highestRole.color) 
  .setImage(message.guild.iconURL)
  .setURL(message.guild.iconrURL)
  .setFooter(`Requested by ${message.author.username}`)
 message.channel.send({embed});
}
