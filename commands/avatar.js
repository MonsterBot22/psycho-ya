const Discord = require("discord.js");  //

exports.run = async (client, message, args) => { //
  if (message.author.bot) return;  // jasher
  // jasher
 // jasher
    let us = message.guild.members.cache.find(u => // jasher
      args // jasher
        .slice(0) // jasher
        .join(" ") // jasher
        .includes(u.username) // jasher
    ); // lowyz
    let muser = message.mentions.users.first(); // jasher
    let userid; // jasher
    if (isNaN(args[0])) { // jasher
      if (!muser) { // jasher
        userid = message.author.id; // jasher
      } else { // jasher
        userid = muser.id; // jasher
      } // jasher
    } else { // jasher
      userid = args[0]; // jasher
    } // jasher
     // jasher
let user = await client.users.fetch(userid); // jasher
 // jasher
     // jasher
  let lowhz = new Discord.EmbedBuilder() // jasher
 // jasher
.setImage(user.displayAvatarURL({dynamic: true, size: 1024})) // jasher
  // jasher
   // jasher
 // jasher
 message.channel.send({embeds: [lowhz]}) // jasher
} // jasher
 // jasher
  exports.conf = { // jasher
  aliases: [] // jasher
}; // jasher
 // jasher
exports.help = { // jasher
  name: "avatar" // jasher
}; //