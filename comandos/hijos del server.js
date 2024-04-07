  const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
  const { data } = require('./hijosdelserver');
  
  const frases = [
    "Desgraciadamente sois todos unos adoptados, pero por si acaso hablarlo con Nel y Sara que son las mamis 🏛",
    
  
  ]
  
module.exports = {
  data: new SlashCommandBuilder()
    .setName("hijosdelserver")
    .setDescription("Que somos en realidad?"),
  execute: async function (interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Frases del lore del Server")
      .setDescription(frases[Math.floor(Math.random() * frases.length)])
      .setColor("#ffb7c5")
      .setTimestamp();

    await interaction.reply({ embeds: [embed] }); // Responder con un mensaje al usuario.
},
};

