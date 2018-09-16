const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  message.react('✉')
  message.reply('bot is been sent in private with the information').then(message => {message.delete(20000)})
message.author.send(`\n\n\`\`\`
              🎃 fun commands 👏    
_________________________________________________
|                                               |
|  -dog <@user> Show random dogs                |
|  -cat Show random cats                        |
|  -catgif Show random cats                     |
|  -fox Show random fox                         |
|  -hug <@user> Hug somebody                    |
|  -punch <@user> Punch for something           |
|  -kill <@user> kill someone                   |
|  -anime show random anime photos              |
|  -memes show random photos                    |
|  -garo to get sigart                          |
|  -rabbits show random rabbits photos          |
|  -slap <user> To slap a person                |
|  -poke <user> To poke a person                |
|  -cuddle <user> To cuddle a person            |
|  -pat <user> to pat a person                  |
|  -kiss <user> to kiss a person                |
|  -tickle <user> to tickle a person            |
|  -ask to ask bot anything answer you          |
|  -otaku to show random photos otaku           |
|  -any                                         |
|  -gay To find out who someone is gay          |
|  -nik to nick any one xD                      |
|_______________________________________________|
                                             
we will add more commands a soon to contact the owner
    \`\`\``)
}
