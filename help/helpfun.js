const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
if(message.author.bot) return;
let customemoji = client.emojis.find(r => r.name === '463763583864406056');
let customemoji1 = client.emojis.find(r => r.name === 'done');
if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
if(randomNumber==2){
message.react('😃')
}else{
message.react(`🎃`)
}
message.reply(`${customemoji1} check from your private`).then(message => {message.delete(20000)})
message.author.send(`\`\`\`asciidoc
= fun commands =

-dog     :: show random dogs photos | استعراض صور كلاب عشوائية
-cat     :: show random cats photos | استعراض صور قطط عشوائية
-catgif  :: show random dogs gif photos | استعراض صور قطط عشوائية متحركة
-fox     :: show random foxes photos | عرض الصور الثعالب عشوائي 
-hug     :: to hug somebody | لعنق شخص ما
-punch   :: Punch for somebody | لكمة لشخص ما
-kill    :: to kill somebody | لقتل شخص ما
-anime   :: show random anime photos | عرض صور انمي عشوائية
-memes   :: show random memes photos | عرض الصور الميمات العشوائية
-rabbits :: show random rabbits photos | عرض صور الأرانب عشوائية
-poke    :: To poke a somebody | 
-cuddle  :: To cuddle a somebody |لعناق شخص ما
-pat     :: to pat a somebody |لتربيتة شخص ما
-kiss    :: to kiss a somebody | لتقبيل شخص ما
-tickle  :: to tickle a somebody |دغدغة شخص ما
-ask     :: To ask Bot to answer yes or no |ليطلب من بوت أن يجيبك بنعم او لا
-otaku   :: to show random photos otaku |لإظهار صور عشوائية أوتاكو
-any     :: show random memes |عرض الصور الميمات العشوائية
-gif     :: search gif | ابحث عن اي صورة\`\`\``)
}
