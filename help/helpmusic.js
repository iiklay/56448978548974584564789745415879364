const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  message.react('✉')
message.reply('check your private i sent you message').then(message => {message.delete(20000)})
message.author.send(`\n\n\`\`\`
                 🎶 music commands 👏
________________________________________________________
|                                                      |
| -play and link song or name play a song from YouTube |
| -pause to Pause the music                            |
| -resume to Resume the music                          |
| -stop Stops the music                                |
| -skip  Skip a next song                              |
| -queue The song that now playing                     |
| -volume Change the volume of the bot from 1 to 100   |
| -about about the bot                                 |
|______________________________________________________|
                                             
we will add more commands a soon to contact the owner
    \`\`\``)
 }
