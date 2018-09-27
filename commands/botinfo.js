const Discord = require("discord.js");
const client = new Discord.Client();
const cooldown = new Set()
const { 
  version 
} = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")
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
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
  let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
      if (err) {
          return console.log(err);
      }
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

    message.channel.send(`\`\`\`asciidoc
[Bot Stats]
= Ping             :: ${Date.now() - message.createdTimestamp} MS
= Guilds           :: ${Math.ceil(client.guilds.size)}
= Users            :: ${client.users.size}
= Channels         :: ${client.channels.size}
= Prefix           :: [ - ]
= RAM Usage        :: ${(process.memoryUsage().rss / 1048576).toFixed()}MB
[About Bot]
= Name             :: ${client.user.tag}
= Node.js Version  :: ${process.version}
= ID               :: ${client.user.id}
[Host Stats]
= Uptime           :: ${duration}
= CPU              :: MD ${os.cpus().map(i => `${i.model}`)[0]}
= CPU usage        :: ${percent.toFixed(2)}%
= Platform         :: ${os.platform()}

= Creator          :: abdo#1889\`\`\``)
})
}
