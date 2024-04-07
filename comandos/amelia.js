const { SlashCommandBuilder } = require('discord.js');

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
    description: "Main Femboy?",
    execute: async function (interaction) {
      await interaction.reply("<@478195015680655404> " + frases[Math.floor(Math.random() * frases.length)]
      ); // Responder con un mensaje al usuario.
  },
};
