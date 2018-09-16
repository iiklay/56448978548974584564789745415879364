const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  var pusssy = [
    "http://imgur.com/IjJ3LPe.jpg",
    "http://imgur.com/GsXVIUO.jpg",
    "http://imgur.com/LgoiQiv.jpg",
    "http://imgur.com/hK5t5db.jpg",
    "http://imgur.com/VbPyTe0.jpg",
    "http://imgur.com/lrvCCYU.jpg",
    "http://imgur.com/rOb2pfG.jpg",
    "http://imgur.com/sbJjoEM.jpg",
    "http://imgur.com/h1oc8KT.jpg",
    "http://imgur.com/wZQXYoY.jpg",
    "http://imgur.com/BzCgQV3.png",
    "http://imgur.com/rUrAog7.jpg",
    "http://imgur.com/H999qJ9.jpg",
    "http://imgur.com/izP7GU2.jpg",
    "http://imgur.com/kSDM3oF.jpg",
    "http://imgur.com/HGwdtHx.jpg",
    "http://imgur.com/N1ZHbm2.jpg",
    "http://imgur.com/7MhWwBy.jpg",
    "http://imgur.com/jPSvXfP.jpg",
    "http://imgur.com/7HJHYpA.jpg",
    "http://imgur.com/REmxZCq.jpg",
    "http://imgur.com/7dCBCAn.jpg",
    "http://imgur.com/N0uAkSP.jpg",
    "http://imgur.com/fPn14fc.jpg",
    "http://imgur.com/taxUuej.jpg",
    "http://imgur.com/RwsH4RR.jpg",
    "http://imgur.com/LrQZk4F.jpg",
    "http://imgur.com/RDeZ9hV.jpg",
    "http://imgur.com/YbLJsdw.jpg",
    "http://imgur.com/Y0tvc9J.jpg",
    "http://imgur.com/HJyo5pZ.jpg",
    "http://imgur.com/8YFRbTy.jpg",
    "http://imgur.com/BZg1xVe.jpg",
    "http://imgur.com/QplD2fp.jpg",
    "http://imgur.com/csSHMvB.jpg",
    "http://imgur.com/4TG6wKO.jpg",
    "http://imgur.com/bWrjP9U.jpg"
    ]
          console.log(message.channel.nsfw); // false
          var pus = new Discord.RichEmbed()
          .addField('NSFW not allowed here','Use NSFW commands in a NSFW marked channel (look in channel settings, dummy)')
          .setImage('https://images-ext-2.discordapp.net/external/hiWbEzhiEXfFaza5khoxg3mR3OWeugZwWo8vGxK8LzA/https/i.imgur.com/oe4iK5i.gif')
          if (message.channel.nsfw === false)    return message.channel.send(pus);
         var cat = new Discord.RichEmbed()
         .setImage(pusssy[Math.floor(Math.random() * pusssy.length)])
         message.channel.sendEmbed(cat);
 }