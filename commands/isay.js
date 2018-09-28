const superagent = require('superagent');
const Discord = require('discord.js');
const client = new Discord.Client();
const cooldown = new Set()
exports.run = async (client, message, argds) => {
if(message.author.bot) return;
if(!message.channel.guild) return ;
let customemoji = client.emojis.find(r => r.name === '463763583864406056');
if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
if (cooldown.has(message.author.id)) {
    return message.reply("Please wait 5 seconds a next command").then(message => {
     message.delete(5000) 
    })
    }
    let args = message.content.split(' ').slice(1).join(' ');
    if(!args[0]) return message.channel.send(`You can add any text after \`-isay\``);
    message.channel.startTyping();
    let{body} = await superagent
    .get(`https://nekobot.xyz/api/imagegen?type=clyde&text=${encodeURIComponent(args)}`);
    message.channel.send({file: { attachment:body.message, name: 'clyde.png'}}).then(()=> { message.channel.stopTyping(); });
    };