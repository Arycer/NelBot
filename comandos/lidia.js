const frases = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  
  ]
  
  
  /*
  Exportación de la función que se ejecuta al llamar al comando "ping".
  */
  module.exports = {
      name: "lidia",
      description: "???",
      execute: async function (interaction) {
        await interaction.reply("<@1009926423055700018> " + frases[Math.floor(Math.random() * frases.length)]
        ); // Responder con un mensaje al usuario.
    },
  };
  