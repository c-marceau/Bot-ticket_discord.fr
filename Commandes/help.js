const Discord = require('discord.js')


module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('ticket.'))return;  


    let embed = new Discord.RichEmbed()
    .setTitle("Support Tickets Help")
    .addField("Créer un ticket [Alias: cr]", "`ticket.create`")
    .addField("Fermeture d'un ticket [Alias: cl]", "`ticket.close [reason]`")
    .addField("Ajout d'un utilisateur au ticket [Alias: a]", "`ticket.add [usermention]`")
    .addField("Suppression d'un utilisateur du ticket [Alias: r]", "`ticket.remove [usermention]`")
    .addField("Informations sur le dernier billet [Alias: lt]", "`ticket.last`")
    .addField("ADMIN | Forcer la fermeture du ticket [Alias: fc]", "`ticket.forceclose [reason]`")
    .addField("ADMIN | Renommer un ticket [Alias: rn]", "`ticket.rename [name]`")
    .addField("ADMIN | Délai d'expiration d'un ticket [Alias: to]", "`ticket.timeout`")
    .addField("ADMIN | Configuration des sujets de ticket [Alias: s]", "`ticket.set [1 - 5] [Topic]`")
    .addField("ADMIN | Configuration du serveur [Alias: su]", "`ticket.setup`")
    .setColor("#e64b0e")
    message.channel.send(embed)




}

module.exports.help = {
  name:"help",
  aliases: [""]
}