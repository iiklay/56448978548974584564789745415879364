const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
        let customemoji = client.emojis.find(r => r.name === '463763583864406056');
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
  var rebel = ["https://media.giphy.com/media/pjk3wZcciRENa/giphy.gif","http://78.media.tumblr.com/fd4383e21495f2bb10ed699cd73f22ca/tumblr_n5l0pk3w4E1so8ds0o1_500.gif","https://media1.giphy.com/media/14309XrKEC7yyk/giphy.gif","http://gifimage.net/wp-content/uploads/2017/06/anime-gif-13-1.gif","https://i.imgur.com/M3BG3Ck.gif","https://4.bp.blogspot.com/-yDd1fLFMKts/WeX_LrmWhwI/AAAAAAAALsU/mLO7KCD0DFMp8n8xbdMdJNR5V2D0D9WXwCLcBGAs/s1600/tenor.gif","https://secure.static.tumblr.com/940bbaba171f6b2f2dabd11c17fd3f20/kj1pjcr/jxWok11nj/tumblr_static_filename_640_v2.gif","https://data.whicdn.com/images/110768190/original.gif","http://78.media.tumblr.com/80f12fdc314760b2ba3e10204e33323d/tumblr_nc1n9weNg11tk3dxfo1_500.gif","https://78.media.tumblr.com/ec3f0546a20a75cd47c00e95ef0ba0a7/tumblr_o3oyhk49JC1u6348eo1_500.gif","https://thumbs.gfycat.com/MassiveUnlinedDarwinsfox-max-1mb.gif","https://data.whicdn.com/images/120798528/original.gif","https://i.gifer.com/NZcE.gif","https://media.giphy.com/media/2aH3YUqjx92cE/giphy.gif","https://78.media.tumblr.com/99fcbe4544d83d27babb216a3f3bb8a3/tumblr_n1shx2AC2e1qztgoio3_500.gif","https://data.whicdn.com/images/81429641/original.gif","https://78.media.tumblr.com/6eace49891b549d558f3d1a2c0ad3c98/tumblr_n4xmoqCrPj1spu161o8_500.gif","https://pa1.narvii.com/6088/b868bd47eb802373aa8b8203f76b07dd04846d1f_hq.gif","https://cdn.discordapp.com/attachments/458384513173684224/460742842503921669/Tumblr_mdi9s0YkbA1rao0vlo1_500.gif","https://cdn.discordapp.com/attachments/458384513173684224/460742882064728065/Chuunibyou-Demo-Koi-Ga-Shitai-6.gif"]
      var args = message.content.split(" ").slice(1);
       var cat = new Discord.RichEmbed()
  .setImage(rebel[Math.floor(Math.random() * rebel.length)])
  message.channel.sendEmbed(cat);
}
