const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
    let customemoji6 = client.emojis.find(r => r.name === 'deve');
          if(message.author.bot) return;
   if(!message.author.user) return message.reply(`This command under development ${customemoji6}`);message.delete(1000);
}
   
   

/*
const Discord = require('discord.js');
const fortnite = require('fortnitetracker-7days-stats');
exports.run = (client, message, argds) => {
  let args = message.content.split(' ').slice(1); 

    if(args.length < 2){
        message.channel.send("`-fr pc (name player)` ");
        return;
    }

    var name = "";
    for(var i = 1; i < args.length; i++){
        name += args[i] + " ";
    }
    name = name.trim(); // remove last space

    var url = "https://fortnitetracker.com/profile/pc/"
                                + encodeURIComponent(name);
    message.channel.startTyping();

    fortnite.getStats(name, "pc", (err, result) => {
        if(err){
            message.channel.send("Name does not exist!");
            message.channel.stopTyping();
            return;
        }
      
        var embed = new Discord.RichEmbed()
            .setAuthor(result.accountName, "", url)
            .setDescription('')
        .addField("Matches winning", result.wins)
        .addField("Games Played", result.matches)
        .addField("Win Rate", ~~result.wr + "%")
        .addField("Total Killing", + result.kills)
        .addField("K/D", + result.kd)
            .setColor("#36393F")
            .setURL(url)
            .setThumbnail(result.skinUrl);

        message.channel.stopTyping();
        message.channel.send(embed);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fortnite'],
  permLevel: 0
};

exports.help = {
  name: 'fortnite',
  description: '',
  usage: ''
};
*/