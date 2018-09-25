const Discord = require("discord.js");
const client = new Discord.Client();
const request = require("request");
const cooldown = new Set()
exports.run = async (client, message, args) => {
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
  let imgs = Math.floor(Math.random() * 80);
  let url = ['https://www.reddit.com/r/Rabbits/.json?sort=rising&t=hour&limit=100'];
  request({
    method: 'GET',
    uri: url[Math.floor(Math.random() * url.length)]
  }, function (err, response, data) {
    if(err) {
      console.log(err, null);
      return;
    }
 
  data = JSON.parse(data);
  var mainObj = data.data.children;
  var urls = {};
 
  for(let i = 0; i < mainObj.length; i++) {
  let url = mainObj[i].data.url;
  urls[i+1] = url;
    }
  const embed = new Discord.RichEmbed()
  .setTitle("Jump!")
  .setColor(0xC93457)
  .setImage(urls[imgs])
  message.channel.send({embed});
 
  if(client.user && message.content === "undefined") {
      message.delete()
  }})
 };
