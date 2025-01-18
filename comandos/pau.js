const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { data } = require('./pau');

const frases = [
  "♡Las malas lenguas hablan, pero las buenas te dejan las piernas temblando♡",
  

  
]

/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pau")
    .setDescription("La esposa de nel"),
  execute: async function (interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Frases del lore de Pau")
      .setDescription(frases[Math.floor(Math.random() * frases.length)])
      .setColor("#ffb7c5")
      .setTimestamp();

    await interaction.reply({ embeds: [embed] }); // Responder con un mensaje al usuario.
},
};

