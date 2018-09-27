const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = async (client, message, args) => {
    let args = message.content.split(' ').slice(1); 

 if (message.member.hasPermission("KICK_MEMBERS")) {
    if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return message.reply('Sorry, i dont have the perms to do this cmd i need KICK_MEMBERS. :x:')
    let reason = args.slice(1).join(' ') || `Moderator didn't give a reason.`;
    if (message.mentions.users.size < 1) return message.channel.send(usage)
    let user = message.guild.member(message.mentions.users.first());
    if (user.highestRole.position >= message.member.highestRole.position) return message.reply('I cant softban that member. They are the same level as you or higher. :x:');
    let modlog = message.guild.channels.find('name', row.logschannel);
    if (!message.guild.member(user).bannable) return message.reply('This member is not banable. Perhaps they have a higher role than me?');
    if (reason.length < 1) return;
    message.channel.send("***The User has been successfully been soft banned! :white_check_mark:***")
    message.guild.ban(user, 2);
    message.guild.unban(user, 2);
    
  }
}
   
