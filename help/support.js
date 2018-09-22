const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
        let customemoji = client.emojis.find(r => r.name === '463763583864406056');
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("BLACK")
  .addField(" This is  Server Support " , "https://discord.gg/2P6xFxa")
  message.channel.sendEmbed(embed);
   }
