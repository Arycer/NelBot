const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { data } = require('./pau');

const frases = [
  "Cuando ni ChatGPT puede ayudarte, aparecen las verdaderas diosas del Olympo a ayudarte. Gracias por todo, te orare todos los años con arroz y una tarta de fresa 🍰",
  "A mi me gusta jugar al LOL - Pau 2024 (nunca tuvo infancia jugando a los Arams)",
  "🏳️‍⚧️",

  
]

/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pau")
    .setDescription("Las heroinas pueden no llevar capas"),
  execute: async function (interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Frases del lore de Pau")
      .setDescription(frases[Math.floor(Math.random() * frases.length)])
      .setColor("#ffb7c5")
      .setTimestamp();

    await interaction.reply({ embeds: [embed] }); // Responder con un mensaje al usuario.
},
};

