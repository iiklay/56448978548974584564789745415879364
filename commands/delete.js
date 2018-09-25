        const Discord = require("discord.js");
        const client = new Discord.Client();
const cooldown = new Set()
        exports.run = (client, message, args) => {
                if(message.author.bot) return;
                  if (cooldown.has(message.author.id)) {
    return message.reply("Please wait 5 seconds a next command").then(message => {
     message.delete(5000) 
    })
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
          let customemoji = client.emojis.find(r => r.name === '463763583864406056');
          let customemoji1 = client.emojis.find(r => r.name === '5458478478475646544');
          if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
          if(!message.channel.guild) return;
          if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply('You do not have Permission `MANAGE_MESSAGES`⚠').then(msg => {
            setTimeout(() => {
              msg.edit('You need Permission `MANAGE_MESSAGES` 👌');
           },1500).then(msg => msg.delete(10000));
          });
          if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply('**Bot** does not have Permission `MANAGE_MESSAGES`').then(msg => {
            setTimeout(() => {
              msg.edit('You should give bot a Permission `MANAGE_MESSAGES` and try again ok');
           },1500).then(msg => msg.delete(10000));
          });
        let textxt = args.slice(0).join("");
        if(message.member.hasPermission("MANAGE_MESSAGES")) {
        if (textxt == "") {
            message.delete().then
        message.channel.send("-delete choose from 1 to 100 to delete messages").then(m => m.delete(10000));
             } else {
        message.delete().then
        message.delete().then
        message.channel.bulkDelete(textxt);
            message.channel.send(`done i removed ${customemoji1} ${textxt}/100`).then(m => m.delete(6000));
            }    
        }
        }
