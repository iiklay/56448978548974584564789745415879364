const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  message.react('✉')
  message.reply('bot is been sent in private with the information').then(message => {message.delete(20000)})
message.author.send(`\n\n\`\`\`
              🈂 text commands 👏   
_________________________________________________
|                                               |
| -tag1 Write with color yellow                 |
| -tag2 Write with color normal                 |
| -tag3 Write with color blue                   |
| -tag4 Write with color green                  |
| -mo writ tweet                                |
| -say command say normal                       |
| -sayembed command say withe emebed            |
| -te Write in a beautiful way                  |
| -mat Mathematics same 1+1=2                   |
| -date to show date                            |
| -emoji Convert words to emoji                 |
|_______________________________________________|
                                             
we will add more commands a soon to contact the owner
    \`\`\``)
}