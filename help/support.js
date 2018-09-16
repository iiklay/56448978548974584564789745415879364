const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("BLACK")
  .addField(" This is  Server Support " , "https://discord.gg/2P6xFxa")
  message.channel.sendEmbed(embed);
   }
