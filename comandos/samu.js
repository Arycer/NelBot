/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/
module.exports = {
    name: "samuel",
    description: "Ser o no ser",
    execute: async function (interaction) {
      await interaction.reply("<@280289709316505602> Tengo una amante llamada Martina Volley 🤡 "); // Responder con un mensaje al usuario.
    },
  };