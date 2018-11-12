const Discord = require('discord.js');
const client = new Discord.Client();
const tokens = require('./tokens.json');

client.on('ready', () => {
  console.log('BOT STARTED UP!');
});

client.on('ready', () => {
  client.user.setActivity("cpacket called me a bueaty. hhelp shows help page", {url: "https://www.youtube.com"});
  console.log(`${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.`);
});

client.on('message', async msg=> {
  if (msg.content === 'hspam') {
	  msg.channel.send(`@everyone
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@everyone h
@here h
@here h
	  `)
  }
  if (msg.content === 'hhelp') {
	  msg.channel.send(`Say hspam or e for massspam. ONLY USE IN SPAM CHANNELS DO NOT ABUSE. All credits goes to blietch#4605`)
  }
  if (msg.content === 'e') {
	  msg.channel.send(`@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@everyone e
@here e
@here e
	  `)
  }
});

client.login(tokens.token);