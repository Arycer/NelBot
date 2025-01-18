const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { data } = require('./paula');

const frases = [
  "♡Las malas lenguas hablan, pero las buenas te dejan las piernas temblando♡",
  "Me gustaria comerme un coño en mi vida antes de morir",
  "Siempre me pregunte a que sabe un coño, Nel me dejas probarlo?",
  "Me gusta el sabor de tu concha",
  "Con esos fondos pareces gay, bueno en tu caso lesbiana",
  "De que habla el maricon este?",
  "Ara Araa~~",
  "Moka-chan ga oshiete kureta ironna mita me ni nareru apurina ndatte dore dore...",
  
  
]

/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/

module.exports = {
  data: new SlashCommandBuilder()
     .setName("paula")
     .setDescription("La mejor novia que ha podido tener Nel ♡"),
    execute: async function (interaction) {
    const embed = new EmbedBuilder()
        .setTitle("Frases del lore de Paula")
       .setDescription(frases[Math.floor(Math.random() * frases.length)])
       .setColor("#ffb7c5")
       .setTimestamp();
         
    await interaction.reply({ embeds: [embed] }); // Responder con un mensaje al usuario.
},
};

