const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, argds) => {
if(message.author.bot) return;
  
      let slot1 = ['🍌', '🍓', '🥥', '🍏', '🍍', '🥝', '🍊', '🍇'];
      let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
      let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
      let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  
      let slot2 = ['🍌', '🍓', '🥥', '🍏', '🍍', '🥝', '🍊', '🍇'];
      let slots4 = `${slot2[Math.floor(Math.random() * slot2.length)]}`;
      let slots5 = `${slot2[Math.floor(Math.random() * slot2.length)]}`;
      let slots6 = `${slot2[Math.floor(Math.random() * slot2.length)]}`;
  
  
      let slot3 = ['🍌', '🍓', '🥥', '🍏', '🍍', '🥝', '🍊', '🍇'];
      let slots7 = `${slot3[Math.floor(Math.random() * slot3.length)]}`;
      let slots8 = `${slot3[Math.floor(Math.random() * slot3.length)]}`;
      let slots9 = `${slot3[Math.floor(Math.random() * slot3.length)]}`;

      let slot11 = ['🍌', '🍓', '🥥', '🍏', '🍍', '🥝', '🍊', '🍇'];
      let slots11 = `${slot11[Math.floor(Math.random() * slot11.length)]}`;
      let slots22 = `${slot11[Math.floor(Math.random() * slot11.length)]}`;
      let slots33 = `${slot11[Math.floor(Math.random() * slot11.length)]}`;
  
      let slot22 = ['🍌', '🍓', '🥥', '🍏', '🍍', '🥝', '🍊', '🍇'];
      let slots44 = `${slot22[Math.floor(Math.random() * slot22.length)]}`;
      let slots55 = `${slot22[Math.floor(Math.random() * slot22.length)]}`;
      let slots66 = `${slot22[Math.floor(Math.random() * slot22.length)]}`;
  
  
      let slot33 = ['🍌', '🍓', '🥥', '🍏', '🍍', '🥝', '🍊', '🍇'];
      let slots77 = `${slot33[Math.floor(Math.random() * slot33.length)]}`;
      let slots88 = `${slot33[Math.floor(Math.random() * slot33.length)]}`;
      let slots99 = `${slot33[Math.floor(Math.random() * slot33.length)]}`;

      let slot111 = ['🍌', '🍓', '🥥', '🍏', '🍍', '🥝', '🍊', '🍇'];
      let slots111 = `${slot111[Math.floor(Math.random() * slot111.length)]}`;
      let slots222 = `${slot111[Math.floor(Math.random() * slot111.length)]}`;
      let slots333 = `${slot111[Math.floor(Math.random() * slot111.length)]}`;
  
      let slot222 = ['🍌', '🍓', '🥥', '🍏', '🍍', '🥝', '🍊', '🍇'];
      let slots444 = `${slot222[Math.floor(Math.random() * slot222.length)]}`;
      let slots555 = `${slot222[Math.floor(Math.random() * slot222.length)]}`;
      let slots666 = `${slot222[Math.floor(Math.random() * slot222.length)]}`;
  
  
      let slot333 = ['🍌', '🍓', '🥥', '🍏', '🍍', '🥝', '🍊', '🍇'];
      let slots777 = `${slot333[Math.floor(Math.random() * slot333.length)]}`;
      let slots888 = `${slot333[Math.floor(Math.random() * slot333.length)]}`;
      let slots999 = `${slot333[Math.floor(Math.random() * slot333.length)]}`;
  
      let we;
  if(slots1 === slots2 && slots2 === slots3) {
  } else {
  if(slots4 === slots5 && slots5 === slots6) {
  } else {
    if(slots7 === slots8 && slots8 === slots9) {

    } else {
        if(slots11 === slots22 && slots22 === slots33) {
        } else {
        if(slots44 === slots55 && slots55 === slots66) {
        } else {
          if(slots77 === slots88 && slots88 === slots99) {
    } else {
        if(slots111 === slots22 && slots222 === slots333) {
        } else {
        if(slots444 === slots555 && slots555 === slots666) {
        } else {
          if(slots777 === slots888 && slots888 === slots999) {
  we = "WIIN"
  } else {
  we = "LOST"
  }


  
  message.channel.send(`
**[  :slot_machine: l SLOTS ]**
------------------
${slots1} : ${slots2} : ${slots3} **<**

${slots4} : ${slots5} : ${slots6} 

${slots7} : ${slots8} : ${slots9} 
------------------`).then(msg => {
setTimeout(() => {
msg.edit(`**[  :slot_machine: l SLOTS ]**
------------------
${slots11} : ${slots22} : ${slots33} 
      
${slots44} : ${slots55} : ${slots66} **<**
      
${slots77} : ${slots88} : ${slots99} 
------------------`);
},1000);
setTimeout(() => {
msg.edit(`**[  :slot_machine: l SLOTS ]**
------------------
${slots111} : ${slots222} : ${slots333} 
      
${slots444} : ${slots555} : ${slots666} 
      
${slots777} : ${slots888} : ${slots999} **<**
------------------
| : : :  **${we}**  : : : |`);
},2000);
    });
     

    }

}
}
}
}

}
}
}
}