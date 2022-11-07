const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const database = require("croxydb")
exports.run = async (client, message, args) => {
  if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.channel.send("Retkin yetmiyor")
  
  let rol = message.mentions.roles.first()
  
  if(!rol) return message.channel.send("Rol etiketle")
  

  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id)
  message.channel.send("ayarlandı")
   
}
exports.conf = {
  aliases: []
};

exports.help = {
  name: "abone-yetkilisi"
};