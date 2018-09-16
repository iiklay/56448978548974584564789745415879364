const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, argss) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  let args = message.content.split(" ").slice(1);
  let cuddle = [
    "https://cdn.discordapp.com/attachments/466949822604247044/467005578548346900/Cuddle6.gif",
    "https://cdn.discordapp.com/attachments/466949822604247044/467005575511932928/Cuddle7.gif",
    "https://cdn.discordapp.com/attachments/466949822604247044/467005570692677645/Cuddle4.gif",
    "https://cdn.discordapp.com/attachments/466949822604247044/467005567144165377/Cuddle3.gif",
    "https://cdn.discordapp.com/attachments/466949822604247044/466952826917093396/cuddlez.gif",
    "https://i.imgur.com/IrY5w46.gif",
    "https://i.imgur.com/lGeXeTQ.gif",
    "https://i.imgur.com/0AaS08b.gif",
    "https://cdn.discordapp.com/attachments/347377586017665027/467497200792895498/cuddle-rkA6SU7w-.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467499871138611204/cuddle-rylgIUmPW.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467500001669545985/cuddle-HkUlIUXDZ.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467500500821213194/cuddle-ryURHLXP-.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467500585667788812/cuddle-r1Q0HImPZ.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467500675098607618/cuddle-rk2-UL7PW.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467501362322604035/cuddle-rJ6zAkc1f.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467501503813386242/cuddle-r1s9RqB7G.gif",
  ]
  let cuddle1 = Math.floor((Math.random() * cuddle.length));
  if (!args[0]) {
    message.channel.send('mention any one to cuddle')
    return;
 }
  if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
    const hembed = new Discord.RichEmbed()
    .setColor("RANDOM")
      .setTitle(`${message.author.username} has been cuddling ${message.mentions.members.first().user.username} 🤤`)
      .setImage(cuddle[cuddle1])
    message.channel.send({
      embed: hembed
    })
    return;
  }
  message.channel.send('mention any one to cuddle')
}
