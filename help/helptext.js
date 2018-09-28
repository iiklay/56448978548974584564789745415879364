const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
if(message.author.bot) return;
let customemoji = client.emojis.find(r => r.name === '463763583864406056');
let customemoji1 = client.emojis.find(r => r.name === 'done');
if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
if(randomNumber==2){
message.react('🖍')
}else{
message.react(`✏`)
}
message.reply(`${customemoji1} check from your private`).then(message => {message.delete(20000)})
message.author.send(`\`\`\`css
= text commands =

-tag1     :: Write with color yellow
-tag2     :: Write with color normal
-tag3     :: Write with color blue
-tag4     :: Write with color green
-say      :: command say normal
-sayembed :: command say withe emebed
-te       :: Write in a beautiful way
-mat      :: Mathematics same 1+1=2
-date     :: to show date
-emoji    :: Convert words to emoji \`\`\``)
}
