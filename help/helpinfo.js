const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
if(message.author.bot) return;
let customemoji = client.emojis.find(r => r.name === '463763583864406056');
let customemoji1 = client.emojis.find(r => r.name === 'done');
if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
if(randomNumber==2){
message.react('📚')
}else{
message.react(`🔎`)
}
message.reply(`${customemoji1} check from your private`).then(message => {message.delete(20000)})
message.author.send(`\`\`\`asciidoc
= info commands =

-bots      :: to show all bots in server | لإظهار جميع البوتات في الخادم
-rooms     :: to show all rooms in server | لإظهار جميع الغرف في الخادم
-count     :: Alarm clock | المنبه
-meteo     :: To see your own weather | لرؤية الطقس الخاص بك
-invite    :: invitation the bot | دعوة البوت
-bcowner   :: send message to owner bot | أرسل رسالة إلى المالك البوت
-serverpic :: show photo the server | عرض صورة الخادم
-userinfo  :: Information about user | معلومات حول المستخدم
-server    :: Information about server | معلومات حول الخادم
-avatar    :: photo profile the user | الصورة الشخصية للمستخدم 
-ping      :: to see the quality of the bot connection | لرؤية جودة اتصال البوت
-myid      :: info about your profile | معلومات عن ملفك الشخصي
-botinfo   :: Information about bot | معلومات حول بوت
-support   :: link server support
-uptime    :: boot time bot | وقت اقلاع البوت
-rolesize  :: to see info about role | للاطلاع على معلومات حول الدور | \`\`\``)
}
