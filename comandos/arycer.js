const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { data } = require('./arycer');

const frases = [
  "Todo bien Arycer? Como te va la vida? te defiendes como gato panza arriba?? 🐱‍👤 ",
  "\nSamu: Michel hinca rodilla ya \nMichel: Pero era broma\nMiguel: Yo ya estoy desnudo, tú sabrás",
 

]


/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/

module.exports = {
    data: new SlashCommandBuilder()
      .setName("arycer")
      .setDescription("Es Michel o Micheeel??"),
    execute: async function (interaction) {
      const embed = new EmbedBuilder()
        .setTitle("Frases del lore de Arycer")
        .setDescription(frases[Math.floor(Math.random() * frases.length)])
        .setColor("#0xffb7c5")
        .setTimestamp();

      await interaction.reply({ embeds: [embed] }); // Responder con un mensaje al usuario.
  },
};

