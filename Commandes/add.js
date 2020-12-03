const Discord = require('discord.js');
const db = require('quick.db');
const rs = require('randomstring');

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('ticket.'))return;  

    let notallowed = new Discord.RichEmbed()
    .setColor('#e64b0e')
    .setDescription(`Vous avez besoin du **Support Team** Rôle pour ajouter des utilisateurs aux tickets`)

    if(!message.member.roles.find(r => r.name == 'Support Team')) return message.channel.send(notallowed)

    let user = message.mentions.members.first()

  let channelsend = new Discord.RichEmbed()
  .setColor('#e64b0e')
  .setTitle(`Added User`)
  .setDescription(`${message.author} A ajouté ${message.mentions.members.first()} dans ce billet`)

  let categorysend = new Discord.RichEmbed()
  .setColor('#e64b0e')
  .setDescription(`Ce serveur n'a pas été configuré | Contacter le propriétaire du serveur`)



    

    message.channel.overwritePermissions(user.id, {'VIEW_CHANNEL': true, 'SEND_MESSAGES': true, 'MENTION_EVERYONE': false})
      message.channel.send(channelsend)

    
    }  
module.exports.help = {
    name:"add",
    aliases: ["a"]
  }