const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, argds) => {
if(message.author.bot) return;
    if(!message.channel.guild) return ;
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply('You do not have Permission `BAN_MEMBERS`⚠').then(message => message.delete(10000));
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply('**Bot** does not have Permission `BAN_MEMBERS`').then(message => message.delete(10000));
      let args = message.content.split(" ").slice(1);

      var maxLen = 18

      if(args.join(' ').length > maxLen) {
        return message.reply('Error ID not right').then(message => {message.delete(5000)
            .catch(error => log.run(3, "messageCleanup", error))});
      }

      client.fetchUser(args).then(user => {
        message.guild.unban(user.id).then(() => {

          message.reply(`Member Unbanned ${user}`)
        }).catch(err => {
            message.reply(`I can not Unbaned him ${user}`)
        })
      }).catch(() => message.reply("-unban ID User"))
    }