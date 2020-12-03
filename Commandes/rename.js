const Discord = require('discord.js');
const db = require('quick.db');


module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('ticket.'))return;  

    let notallowed = new Discord.RichEmbed()
    .setColor('#e64b0e')
    .setDescription(`Vous avez beoin de **Support Team** Role pour rename le ticket`)

    if(!message.member.roles.find(r => r.name == 'Support Team')) return message.channel.send(notallowed)

    let numbers = db.fetch(`${message.guild.id}_${message.author.id}-ticketnumber`)

    let authorsend2 = new Discord.RichEmbed()
    .setColor('#e64b0e')
    .setDescription(`Entrez quelque chose pour renommer le ticket`)

    let rename = args.join("-");

  if(!rename) return message.channel.send(authorsend2)

    message.channel.setName(`${rename}-${numbers}`)

    db.set(`${message.guild.id}_${message.author.id}-channelID`, message.channel.id)

  let embed = new Discord.RichEmbed()
  .setColor('#e64b0e')
  .setDescription(`Ticket renomé en ${rename}`)
    message.channel.send(embed)



     
}
    
module.exports.help = {
    name:"rename",
    aliases: ["rn"]
  }