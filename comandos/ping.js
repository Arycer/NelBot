const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { data } = require('./ping');

const frases = [
  "Pong!",
  
  
]

module.exports = {
  data: new SlashCommandBuilder()
     .setName("ping")
     .setDescription("Responde Pong!"),
    execute: async function (interaction) {
    const embed = new EmbedBuilder()
        .setTitle("Te responde con Pong!")
       .setDescription(frases[Math.floor(Math.random() * frases.length)])
       .setColor("#ffb7c5")
       .setTimestamp();
         
    await interaction.reply({ embeds: [embed] }); // Responder con un mensaje al usuario.
},
};

