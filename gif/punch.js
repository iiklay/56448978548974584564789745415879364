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
  let user = message.mentions.users.first();
  if (!user) {
  if(!user) return message.channel.send('Select someone you want to give them a punch');
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
    return message.emit('commandUsage', message, this.help);
  }
  let punches = [
  'https://i.giphy.com/media/iWEIxgPiAq58c/giphy.gif',
  'https://i.giphy.com/media/DViGV8rfVjw6Q/giphy.gif',
  'https://i.giphy.com/media/GoN89WuFFqb2U/giphy.gif',
  'https://i.giphy.com/media/xT0BKiwgIPGShJNi0g/giphy.gif',
  'https://i.giphy.com/media/Lx8lyPHGfdNjq/giphy.gif'
  ];
  
  message.channel.send({
  embed: {
  description: `${message.author.username} been punched ${user.username}! 👊`,
  image: {
    url: punches[Math.floor(Math.random() * punches.length)]
  }
  }
  }).catch(e => {
  client.log.error(e);
  })
}  
