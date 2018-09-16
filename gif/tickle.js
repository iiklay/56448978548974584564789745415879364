const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, argss) => {
 if(!message.channel.guild) return message.reply('this command is for guilds only!');
  let args = message.content.split(" ").slice(1);
  let tickle = [
    "https://cdn.weeb.sh/images/rkPzIyQi-.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467599200432160768/tickle-HyjNLkXiZ.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467599311002271744/tickle-rybRByXjZ.gif",
    "https://cdn.discordapp.com/attachments/466949822604247044/467005567144165377/Cuddle3.gif",
    "https://cdn.discordapp.com/attachments/466949822604247044/466952826917093396/cuddlez.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467599392426426369/tickle-SyGQIk7i-.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467599512366612520/tickle-HyPyUymsb.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467607824135094315/tickle-SyQHUy7oW.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467607970268708865/tickle-Byj7LJmiW.gif",
    "https://cdn.weeb.sh/images/H1p0ByQo-.gif",
    "https://cdn.weeb.sh/images/SkmEI1mjb.gif",
    "https://78.media.tumblr.com/2d29fdbf47fd756caaea08f44b7eac92/tumblr_inline_ow4u7pIhWJ1u544cj_540.gif",
    "https://78.media.tumblr.com/eb8a0282d62c9697b93cd546b77106f8/tumblr_o505jxtnWk1vpbklao2_500.gif",
    "https://media.giphy.com/media/349HKeODRMQ36/giphy.gif",
    "https://media.giphy.com/media/IRKHf3hD2xsre/giphy.gif",
  ]
  let tickle1 = Math.floor((Math.random() * tickle.length));
  if (!args[0]) {
    message.channel.send('You did not mention any one')
    return;
 }
  if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
    const hembed = new Discord.RichEmbed()
    .setColor("RANDOM")
      .setTitle(`**${message.author.username}** has been tickling **${message.mentions.members.first().user.username}** 🤣 `)
      .setImage(tickle[tickle1])
    message.channel.send({
      embed: hembed
    })
    return;
  }

  message.channel.send("You can't tickling yourself! ");
 
}
