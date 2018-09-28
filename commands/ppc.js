const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, argds) => {
	    if(message.author.bot) return;
	    if(!message.channel.guild) return ;
   (async function() {
   let début = {
   embed: {
    color: 3447003,
    author: {
    name: message.author.username,
    icon_url: message.author.avatarURL
   },
    title: "لعبة حجرة ورقة مقص",
   description: "المقص || الورقة || الحجرة؟",
    timestamp: new Date(),
   footer: {
   text: 'Dros Bot ™',
    }
    }
    };
    const messageInteractif = await message.channel.send(début);
   message.delete()

    await messageInteractif.react("🌑");
    await messageInteractif.react("📄");
    await messageInteractif.react("✂");
    const collecteur = messageInteractif.createReactionCollector((reaction, user) => user.id === message.author.id);
    collecteur.on('collect', async(reaction) => {
    res = Math.floor(Math.random() * 3) + 1

   if(res===1){
   result=`✂`;
   }else if(res===2){
   result=`📄`;
   }else if(res===3){
   result=`🌑`;
   }
    if (reaction.emoji.name === "🌑" ) {
   let Rock1 = {
   embed: {
   color: 0x06DF00,
    title: message.author.username + " 🌑 **X** Dros Bot ™ "+  result,
    description: "🎉 لقد ربحت يا اخي مبروك",
   timestamp: new Date(),
   footer: {
    text: 'Dros Bot ™',
   }
    }
    };
    let Rock2 = {
   embed: {
    color: 0xff0000,
   title: message.author.username + " 🌑 **X** Dros Bot ™"+  result,
    description: "😧 لقد خسرت التحدي حاول مرة اخرى",
    timestamp: new Date(),
    footer: {
    text: 'Dros Bot ™',
    }
   }
    };
   let Rock3 = {
   embed: {
    color: 3447003,
    title: message.author.username + " 🌑 **X** Dros Bot ™"+  result,
    description: "😆 ياله من حظ حجرة مقابل حجرة",
    timestamp: new Date(),
    footer: {
    text: 'Dros Bot ™',
    }
   }
    };
   if(res===1){

   message.channel.send(Rock1);
   }else if(res===2){

   message.channel.send(Rock2);
   }else if(res===3){

   message.channel.send(Rock3);
   }
   messageInteractif.delete();
   }
   await reaction.remove(message.author.id);
    if (reaction.emoji.name === "📄" ) {
   let papier1 = {
   embed: {
   color: 0x06DF00,
   title: message.author.username + " 📄 **X** Dros Bot ™"+  result,
   description: "🎉 لقد ربحت يا اخي مبروك",
   timestamp: new Date(),
   footer: {
    text: 'Dros Bot ™',
    }
   }
    };
    let papier2 = {
   embed: {
    color: 0xff0000,
   title: message.author.username + " 📄 **X** Dros Bot ™"+  result,
    description: "لقد خسرت التحدي حاول مرة اخرى",
    timestamp: new Date(),
    footer: {
    text: 'Dros Bot ™',
   }
   }
   };
    let papier3 = {
   embed: {
   color: 3447003,
   title: message.author.username + " 📄 **X** Dros Bot ™"+  result,
   description: "تعادل مرة تانية يا اخي هيا مرة اخرى",
    timestamp: new Date(),
   footer: {
    text: 'Dros Bot ™',
    }
   }
   };
   if(res===3){
 
    message.channel.send(papier1);
   }else if(res===1){
    message.channel.send(papier2);
    }else if(res===2){
    message.channel.send(papier3);
    }
    messageInteractif.delete();
   }
    await reaction.remove(message.author.id);
   if (reaction.emoji.name === "✂" ) {
   let ciseaux1 = {
   embed: {
   color: 0x06DF00,
   title: message.author.username + " ✂ **X** Dros Bot ™"+  result,
   description: "🎉 لقد ربحت يا اخي مبروك المقص حليفك",
    timestamp: new Date(),
   footer: {
    text: 'Dros Bot ™',
    }
   }
   };
   let ciseaux2 = {
   embed: {
   color: 0xff0000,
   title: message.author.username + " ✂ VS **X** Dros Bot ™"+  result,
   description: "لقد خسرت التحدي حاول مرة اخرى",
   timestamp: new Date(),
   footer: {
   text: 'Dros Bot ™',
   }
   }
   };
   let ciseaux3 = {
   embed: {
   color: 3447003,
   title: message.author.username + " ✂ VS **X** Dros Bot ™"+  result,
   description: "تعادل يا اخي هيا مرة اخرى",
   timestamp: new Date(),
   footer: {
    text: 'Dros Bot ™',
   }
    }
   };
   if(res===2){
   //win
   message.channel.send(ciseaux1);
   }else if(res===3){
   message.channel.send(ciseaux2);
   }else if(res===1){
   message.channel.send(ciseaux3);
   }
   messageInteractif.delete();
   };
   await reaction.remove(message.author.id);
   });
   }());
   };