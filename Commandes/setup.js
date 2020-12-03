const Discord = require('discord.js');
const db = require('quick.db');
const rs = require('randomstring');

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('ticket.'))return;  

    let permcheck = new Discord.RichEmbed()
    .setColor('#e64b0e')
    .setDescription(`Vous n'avez pas l'autorisation de le faire`)

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(permcheck)

    let setupcheck2 = new Discord.RichEmbed()
    .setColor('#e64b0e')
    .setDescription(`Ce serveur a déjà été configuré`)


  message.guild.createRole({
    name: 'Support Team',
    color: 'BLUE',
    permissions: ['MANAGE_MESSAGES', 'KICK_MEMBERS']
  })
    .then(role => console.log(`Création d'un nouveau rôle avec un nom ${role.name} et couleur ${role.color}`))
    .catch(console.error)

    let categorycreate = new Discord.RichEmbed()
    .setColor('#e64b0e')
    .setTitle(`Server Setup Successfully`)
    .setDescription(`Support Team Role : **Support Team** | Catégorie de billet ouvert : **Tickets** | Billet fermé Category: **Billet fermé**`)

    var name = `Tickets`;
    message.guild.createChannel(name, { type: "category" })

    var name = `Closed Tickets`;
    message.guild.createChannel(name, { type: "category" }).then(
      (chan2) => {
        chan2.overwritePermissions(message.guild.roles.find('name', '@everyone'), {
          'SEND_MESSAGES': false
        }
        )})

    message.channel.send(categorycreate)

    var name = `ticket-logs`;
    message.guild.createChannel(name, { type: "text" }).then(
      (chan) => {
      chan.overwritePermissions(message.guild.roles.find('name', '@everyone'), {
         'VIEW_CHANNEL': false
      })
      chan.overwritePermissions(message.guild.roles.find('name', 'Support Team'), {
          'VIEW_CHANNEL': true
      })
        let category = message.guild.channels.find(c => c.name == "Tickets" && c.type == "category");
  
      chan.setParent(category.id)
      chan.setTopic('Canal de journaux de tickets pour le bot de tickets de support')

      
    })
}
module.exports.help = {
    name:"setup",
    aliases: ["su"]
  }