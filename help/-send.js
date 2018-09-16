const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, argss) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  let men = message.mentions.users.first()
  let args = message.content.split(" ").slice(2).join(" ")
  let defineduser = message.mentions.users.first();
    if (message.author.id !== '406192153979518976') return message.reply('sorry but this command for owner 😪')
    message.delete();
      if(!args) return message.channel.send("`Usage: "  + 'iam <@someone> <message>`');
      if(!men) return message.channel.send("`Usage: "  + 'iam <@someone> <message>`');
        let Embed = new Discord.RichEmbed()
        .setDescription( args,)
          .setColor('BLACK')
         defineduser.send(Embed)    
}
