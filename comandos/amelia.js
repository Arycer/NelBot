const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { data } = require('./amelia');

const frases = [
  "Pregunta seria... cual sera el siguente cosplay?? ✨",
  "Yo tenía un amigo que se metió a derecho y ya no es mi amigo.",
  "Damos miedito cuando juntamos nuestros pitos.",
  "Tengo que pensar mas, O no, igual tengo que pensar menos.",
  
  
]

/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/

module.exports = {
  data: new SlashCommandBuilder()
     .setName("amelia")
     .setDescription("Main Femboy?"),
    execute: async function (interaction) {
    const embed = new EmbedBuilder()
        .setTitle("Frases del lore de Amelia")
       .setDescription(frases[Math.floor(Math.random() * frases.length)])
       .setColor("#0xffb7c5")
       .setTimestamp();
         
    await interaction.reply({ embeds: [embed] }); // Responder con un mensaje al usuario.
},
};

