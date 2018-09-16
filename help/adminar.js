const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  message.react('✉')
message.reply('تحقق من الخاص بك أرسل لك رسالة').then(message => {message.delete(20000)})
message.author.send(`\n\n\`\`\`fix
                 اوامر المسؤولين                          
__________________________________________________
|                                                 
|  -ban <@user> <reason> حظر المستخدم           
|  -kick <@user> <reason> ركل المستخدم           
|  -delete chat مسح الشات                        
|  -mute <@user> <time> <reason> اسكات المستخدم  
|  -unmute <@user> <reason> الغاء اسكات المستخدم 
|  -role <@user> <namerole> اعطاء دور            
|  -removerole <@user> <name role> ازالة ادور    
|  -bans جميع أعضاء المحظورة                     
|  -chatmute اغلاق الشات                          
|  -openchat فتح الشات                           
|  -say امر ساي عادي                             
|  -sayembed امر ساي مع المبيد                   
|  -shut @<user> اسكات شخص من روم محدد           
|  -open @<user> الغاء اسكات شخص                
|  -antilinks منع روابط السيرفرات الاخرى         
|  -antiinfo معلومات حول مانع روابط         
|________________________________________________

لإرسال التقارير اليها logs لا تنسى ان تنشأ قناة اسمها   
\`\`\``)
 }
