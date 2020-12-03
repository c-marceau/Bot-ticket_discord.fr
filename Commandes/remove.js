const Discord = require('discord.js');
const db = require('quick.db');
const rs = require('randomstring');

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('ticket.'))return;  

    let notallowed = new Discord.RichEmbed()
    .setColor('#e64b0e')
    .setDescription(`Vous avez besoin du **Support Team** Rôle pour supprimer des utilisateurs des tickets`)

    if(!message.member.roles.find(r => r.name == 'Support Team')) return message.channel.send(notallowed)

  let channelsend = new Discord.RichEmbed()
  .setColor('#e64b0e')
  .setTitle(`Utilisateur supprimé`)
  .setDescription(`${message.author} A supprimé ${message.mentions.members.first()} À partir de ce billet`)

  let categorysend = new Discord.RichEmbed()
  .setColor('#e64b0e')
  .setDescription(`Ce serveur n'a pas été configuré | Contacter le propriétaire du serveur`)



    

    message.channel.overwritePermissions(user, {'VIEW_CHANNEL': false, 'SEND_MESSAGES': false, 'MENTION_EVERYONE': false})
      message.channel.send(channelsend)

    
    }  
module.exports.help = {
    name:"remove",
    aliases: ["r"]
  }