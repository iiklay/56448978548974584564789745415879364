const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  message.react('✉')
  message.reply('bot is been sent in private with the information').then(message => {message.delete(20000)})
message.author.send(`\n\n\`\`\`
               📚 fun commands 👏    
_________________________________________________
|                                               |
| -bots to show all bots in server              |
| -rooms to show all rooms in server            |
| -count start count time                       |
| -meteo To see the weather                     |
| -invite invitation the bot                    |
| -bcowner send message to owner                |
| -serverpic show photo the server              |
| -userinfo Information about user              |
| -server Information about server              |
| -avatar photo profile person                  |
| -ping The quality of the bot connection       |
| -myid info about your profile                 |
| -botinfo Information about bot                |
| -support link server support                  |
| -uptime boot time the bot                     |
|_______________________________________________|
                                             
we will add more commands a soon to contact the owner
    \`\`\``)
}
