exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('This command only for servers ⁉');
    let start = Date.now(); message.channel.send('pong').then(message => { 
      message.edit(`Ping: ${client.ping.toFixed(0)}ms | Websocket: ${Date.now() - start}ms`);
  });
  }
