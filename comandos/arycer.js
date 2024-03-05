/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/
module.exports = {
    name: "arycer",
    description: "Es Michel o Micheeel??",
    execute: async function (interaction) {
      await interaction.reply("<@361147515673903116> Todo bien Arycer? Como te va la vida? te defiendes como gato panza arriba?? 🐱‍👤 "); // Responder con un mensaje al usuario.
    },
  };