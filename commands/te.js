const Discord = require('discord.js');
const client = new Discord.Client();
const cooldown = new Set()
exports.run = (client, message, argds) => {
if(message.author.bot) return;
let customemoji = client.emojis.find(r => r.name === '463763583864406056');
if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
if (cooldown.has(message.author.id)) {
    return message.reply("Please wait 5 seconds a next command").then(message => {
     message.delete(5000) 
    })
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
    const codes = {
        "a": "𝒶",
        "b": "𝒷",
        "c": "𝒸",
        "d": "𝒹",
        "e": "𝑒",
        "f": "𝒻",
        "g": "𝑔",
        "h": "𝒽",
        "i": "𝒾",
        "j": "𝒿",
        "k": "𝓀",
        "l": "𝓁",
        "m": "𝓂",
        "n": "𝓃",
        "o": "𝑜",
        "p": "𝓅",
        "q": "𝓆",
        "r": "𝓇",
        "s": "𝓈",
        "t": "𝓉",
        "u": "𝓊",
        "v": "𝓋",
        "w": "𝓌",
        "x": "𝓍",
        "y": "𝓎",
        "z": "𝓏",
        "A": "𝒜",
        "B": "𝐵",
        "C": "𝒞",
        "D": "𝒟",
        "E": "𝐸",
        "F": "𝐹",
        "G": "𝒢",
        "H": "𝐻",
        "I": "𝐼",
        "J": "𝒥",
        "K": "𝒦",
        "L": "𝐿",
        "M": "𝑀",
        "N": "𝒩",
        "O": "𝒪",
        "P": "𝒫",
        "Q": "𝒬",
        "R": "𝑅",
        "S": "𝒮",
        "T": "𝒯",
        "U": "𝒰",
        "V": "𝒱",
        "W": "𝒲",
        "X": "𝒳",
        "Y": "𝒴",
        "Z": "𝒵"
    };
            let args = message.content.split(" ").slice(1)
    if (args.length < 1) {
      message.channel.send('You must provide some text');
    }
    message.channel.send(args.join(' ').split('').map(c => codes[c] || c).slice(0).join('')
     
    );
    };