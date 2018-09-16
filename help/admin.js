const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  message.react('✉')
message.reply('check your private i sent you message').then(message => {message.delete(20000)})
message.author.send(`\n\n\`\`\`
                  Admin Commands    

_________________________________________________
|                                               |              
|  -ban  = <@user> <reason>                     |
|  -kick = <@user> <reason>                     |
|  -delete = chat                               | 
|  -clean  = clean chat from 1-100              |
|  -mute = <@user> <time> <reason>              |
|  -unmute = <@user> <reason>                   |
|  -role = <@user> <namerole>                   |
|  -removerole = <@user> <name role>            |
|  -bans = all members banned                   |
|  -chatmute                                    |
|  -openchat                                    |
|  -say = command say normal                    |
|  -sayembed = command say with embed           |
|  -shut = @<user> Mute a user from the room    |
|  -open = @<user> open mute user from room     |
|  -antilinks = blocker links other clans       |
|  -antiinfo = information about command        |
|_______________________________________________|
                                             
       don forget create channel named logs         
    \`\`\``)
 }
