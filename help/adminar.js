const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
if(message.author.bot) return;
let customemoji = client.emojis.find(r => r.name === '463763583864406056');
if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
if(randomNumber==2){
message.react('✉')
}else{
message.react(`📂`)
}
message.reply('تحقق من الخاص بك أرسل لك رسالة').then(message => {message.delete(20000)})
message.author.send(`\`\`\`asciidoc
= قائمة الأوامر Dros bot =

[أوامر الادارية]

-ban        :: حظر المستخدم مع السبب في الخاص | السبب اختياري
-kick       :: ركل المستخدم مع السبب في الخاص | السبب اختياري
-mute       :: كتم المستخدم مع السبب في الخاص | السبب اختياري
-unban      :: ازالة حظر عن المستخدم
-banid      :: حظر المستخدم عن طريق الايدي
-setrole    :: تحديد دور عند دخول اي مستخدم يئخد الدور
-delete     :: تنظيف الدردشة اختار من 1 الى 100
-clean      :: تنظيف الدردشة اختار من 1 الى 99 سريع
-unmute     :: الغاء كتم عن المستخدم مع السبب في الخاص | السبب اختياري
-role       :: لإعطاء دور للمستخدم
-removerole :: لإزالة دور من مستخدم
-bans       :: مشاهدة جميع الأعضاء المحظورين من الخادم
-chatmute   :: كتم الدردشة لجميع الأعضاء
-openchat   :: إلغاء كتم الدردشة
-shut       :: كتم صوت عضو من الغرفة | الغرفة اختيارية
-open       :: لغاء كتم العضو
-antilinks  :: لتشغيل مانع الروابط نفس الأمر لتعطيل
-antiinfo   :: معلومات حول الأمر antilinks هل هو يشتغل أو معطل

للحصول على جميع سجلات الخادم logs قم بإنشاء غرفة باسم \`\`\``)
}
