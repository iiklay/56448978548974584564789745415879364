const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  if (message.author.id !== '406192153979518976') return message.reply('sorry but this command for owner 😪')
  message.author.send(`\n\n\`\`\`autohotkey
     ⚠ commands controle a bot 💬
________________________________________________________________
|                                                             
| ✦ To change name the bot type --name                         
| ✦ to make bot on streaming twitch --tw
| ✦ ito make bot play a game --play
| ✦ to make bot watching state --wt
| ✦ if you want make bot listening type --lis
| ✦ to change photo ths bot --photo and url link the photo    
| 
|  ⚠ commands change state the bot 💬
|
| ✦ state dnd type --dnd ❤
| ✦ state idle type --idle 🧡
| ✦ state online type --online 💚
|
| ⚠ commands messages 💬                                      
|                                                               
| ✦ command say for owner -²²  any word                        
| ✦ brodcast owner type --message                              
| ✦ send message from bot to user --send <@!user>              
|______________________________________________________________ 
\`\`\``)
  
  message.reply('bot is been sent in private with the information').then(message => {message.delete(20000)})
 }
