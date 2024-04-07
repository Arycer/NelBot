const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { data } = require('./iratxe');

const frases = [
  "Todos te queremos deja de morirte gracias ❤❤ ",
  "Iratxe: Mejor nunca que tarde.",

]

module.exports = {
  data: new SlashCommandBuilder()
    .setName("iratxe")
    .setDescription("Estara viva o no?"),
  execute: async function (interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Frases del lore de Doritos")
      .setDescription(frases[Math.floor(Math.random() * frases.length)])
      .setColor("#ffb7c5")
      .setTimestamp();

    await interaction.reply({ embeds: [embed] }); // Responder con un mensaje al usuario.
},
};

