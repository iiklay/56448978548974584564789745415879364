const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
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