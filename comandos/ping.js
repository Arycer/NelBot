/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/
module.exports = {
  name: "ping",
  description: "Responde Pong!",
  execute: async function (interaction) {
    await interaction.reply("Pong!"); // Responder con un mensaje al usuario.
  },
};
