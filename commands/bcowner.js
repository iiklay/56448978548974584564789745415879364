const Discord = require("discord.js");
const client = new Discord.Client();
const cooldown = new Set()
exports.run = (client, message, args) => {
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
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(" ");
  client.users.get("406192153979518976").send( //id owner here
      "\n" + `**Name the server** : ${message.guild.name}`+
      "\n" + `**Sender** : ${message.author.tag}`+
      "\n" + `**Message** : ${args}` )
  let embed = new Discord.RichEmbed()
       .setColor(message.guild.me.highestRole.color) 
       .setFooter (`Your message has been sent Done ✅`)
       .setAuthor("Bot [MR] Clan")
       message.channel.send(embed);                                
}
