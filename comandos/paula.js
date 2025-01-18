const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { data } = require('./amelia');

const frases = [
  "♡𝐿𝒶𝓈 𝓂𝒶𝓁𝒶𝓈 𝓁𝑒𝓃𝑔𝓊𝒶𝓈 𝒽𝒶𝒷𝓁𝒶𝓃, 𝓅𝑒𝓇𝑜 𝓁𝒶𝓈 𝒷𝓊𝑒𝓃𝒶𝓈 𝒹𝑒𝒿𝒶𝓃 𝓁𝒶𝓈 𝓅𝒾𝑒𝓇𝓃𝒶𝓈 𝓉𝑒𝓂𝒷𝓁𝒶𝓃𝒹𝑜.♡",

  
  
]

/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/

module.exports = {
  data: new SlashCommandBuilder()
     .setName("paula")
     .setDescription("novia de nel???"),
    execute: async function (interaction) {
    const embed = new EmbedBuilder()
        .setTitle("Frases del lore de Paula")
       .setDescription(frases[Math.floor(Math.random() * frases.length)])
       .setColor("#ffb7c5")
       .setTimestamp();
         
    await interaction.reply({ embeds: [embed] }); // Responder con un mensaje al usuario.
},
};

