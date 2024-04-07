const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { data } = require('./doritos');

const frases = [
    "\nDoritos siendo abstemia\nhttps://cdn.discordapp.com/attachments/1016438591309762581/1220437403433566349/IMG_20240321_192150.jpg?ex=660eefe7&is=65fc7ae7&hm=1b61394bbe614fe2b3ba0d18ef9c0e649f7fc96b1ba55e0f5d9af493ef34c1a3&",
    "Madre mia que culo",
    "\nDoritos borracha:\nhttps://cdn.discordapp.com/attachments/1068649239208546325/1220444896662393022/1711047121302.jpg?ex=660ef6e2&is=65fc81e2&hm=9b15f5b4506a384a8e5c884da752b8138ab2eceaf2ec4bb6c51c07dc7062ff67&",
    "Nel si nos conocieramos en persona de seguro nos la pasabamos bien (fan total de la saga de peliculas de SAW)",
    

  ]
  
  
  /*
  Exportación de la función que se ejecuta al llamar al comando "ping".
  */

module.exports = {
  data: new SlashCommandBuilder()
    .setName("doritos")
    .setDescription("Aparecera de nuevo?"),
  execute: async function (interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Frases del lore de Doritos")
      .setDescription(frases[Math.floor(Math.random() * frases.length)])
      .setColor("#ffb7c5")
      .setTimestamp();

    await interaction.reply({ embeds: [embed] }); // Responder con un mensaje al usuario.
},
};

