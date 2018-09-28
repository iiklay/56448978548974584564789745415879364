const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
if(message.author.bot) return;
let customemoji = client.emojis.find(r => r.name === '463763583864406056');
let customemoji1 = client.emojis.find(r => r.name === 'done');
if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
if(randomNumber==2){
message.react('🎵')
}else{
message.react(`🎺`)
}
message.reply(`${customemoji1} check from your private`).then(message => {message.delete(20000)})
message.author.send(`\`\`\`asciidoc
= info commands =

-play    :: play music |تشغيل الموسيقى
-pause   :: to Pause the music | لتوقيف الموسيقى مئقتا
-resume  :: to Resume the music | لاستئناف الموسيقى
-stop    :: Stops the music | توقف الموسيقى
-skip    :: Skip to next song | انتقل إلى الأغنية التالية
-queue   :: The song that now playing | لرؤية الأغنية التي مشتغلة الآن
-volume  :: Change the volume | تغيير حجم الصوت
-about   :: info about the bot music | معلومات حول البوت موسيقى  \`\`\``)
}
