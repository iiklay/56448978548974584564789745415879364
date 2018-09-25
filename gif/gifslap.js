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
  if(!user) return message.channel.send('Select someone you want to give them a slap');
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
    return message.emit('commandUsage', message, this.help);
  }
  let slap = [
	"https://cdn.discordapp.com/attachments/466949822604247044/467005787189805066/Slap_6.gif",
	"https://cdn.discordapp.com/attachments/466949822604247044/467005776880336896/Slap_9.gif",
	"https://cdn.discordapp.com/attachments/466949822604247044/467005776515563520/Slap_11.gif",
	"https://cdn.discordapp.com/attachments/466949822604247044/467005770114793492/Slap_8.gif",
	"https://cdn.discordapp.com/attachments/466949822604247044/467005766608486431/Slap_12.gif",
	"https://cdn.discordapp.com/attachments/466949822604247044/467005763814948864/Slap_13.gif",
	"https://cdn.discordapp.com/attachments/466949822604247044/467005759167791106/Slap_14.gif",
	"https://cdn.discordapp.com/attachments/466949822604247044/467005741694451713/Slap_5.gif",
	"https://cdn.discordapp.com/attachments/466949822604247044/467005741216169984/Slap_2.gif",
	"https://cdn.discordapp.com/attachments/466949822604247044/467005739530190865/Slap_4.gif",
	"https://cdn.discordapp.com/attachments/466949822604247044/467005740603801600/Slap_1.gif",
	"https://cdn.discordapp.com/attachments/466949822604247044/467005738804445185/Slap_3.gif",
	"https://cdn.discordapp.com/attachments/466949822604247044/467005734412877854/Slap.gif",
	"https://cdn.discordapp.com/attachments/466949822604247044/466953715039993856/staph_it.gif",
	"https://cdn.discordapp.com/attachments/466949822604247044/466951859148554260/nu.gif",
	"https://media0.giphy.com/media/fO6UtDy5pWYwM/giphy.gif",
  ];
  
  message.channel.send({
  embed: {
  description: `${message.author.username} has been slapping ${user.username}`,
  image: {
    url: slap[Math.floor(Math.random() * slap.length)]
  }
  }
  }).catch(e => {
  client.log.error(e);
  })
}  
