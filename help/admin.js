const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
if(message.author.bot) return;
let customemoji = client.emojis.find(r => r.name === '463763583864406056');
if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
if(randomNumber==2){
message.react('✉')
}else{
message.react(`📂`)
}
message.reply('check your private i sent you message').then(message => {message.delete(20000)})
message.author.send(`\`\`\`asciidoc
= Command List Dros Bot =

[Admin commands]

-ban        :: ban the user with reason in private | reason is optional
-kick       :: Kicks the user with reason in private | reason is optional
-mute       :: mute the user with reason in private | reason is optional
-unban      :: unban the user
-banid      :: ban user with id
-setrole    :: set auto role at joined member
-delete     :: clean chat choose from 1 to 100
-clean      :: clean fast choose from 1 to 99
-unmute     :: unmute user with reason in private | reason is optional
-role       :: to give a role to a user
-removerole :: remove role from a user
-bans       :: to see all members banned from server
-chatmute   :: mute chat for all members
-openchat   :: unmte chat.
-shut       :: Mute a member of the room The room is optional
-open       :: unmute member
-antilinks  :: to activate the links blocker | same command to disable
-antiinfo   :: info about command antilinks enable or disable

create room named logs to get all logs about server\`\`\``)
}
