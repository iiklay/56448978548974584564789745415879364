const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
        let customemoji = client.emojis.find(r => r.name === '463763583864406056');
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
message.delete()
let customemoji6 = client.emojis.find(r => r.name === '65654854847848947894');
let customemoji1 = client.emojis.find(r => r.name === '5449874894189564');
let customemoji2 = client.emojis.find(r => r.name === '547984894654964564');
let customemoji3 = client.emojis.find(r => r.name === '54848408689447894');
let customemoji4 = client.emojis.find(r => r.name === '5498478456848947897');
let customemoji5 = client.emojis.find(r => r.name === '5648648665461654646');
let abdo = new Discord.RichEmbed()
.setColor(message.guild.me.highestRole.color) 
.setAuthor(message.author.username+`#${message.author.discriminator}`,message.author.displayAvatarURL)
.addField(`-adminar ${customemoji3}`,'الاوامر المشرفين',true)
.addField(`-info ${customemoji2}`,'معلومات عامة',true)    
.addField(`-fun ${customemoji1}`,'الاوامر الممتعة',true)    
.addField(`-music ${customemoji4}`,'الاوامر الموسيقى',true)  
.addField(`-text ${customemoji5}`,'أوامر نصية',true)   
.addField(`-Image ${customemoji6}`,'أوامر الصور',true)   
.setFooter(client.user.username,client.user.displayAvatarURL)   
message.channel.send(abdo);
}
