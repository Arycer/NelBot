const frases = [
    "",
    "",
   
  
  ]
  
  
  /*
  Exportación de la función que se ejecuta al llamar al comando "ping".
  */
  
  module.exports = {
      name: "kevyn",
      description: "Manopocha",
      execute: async function (interaction) {
        await interaction.reply("<@879083545568608277> " + frases[Math.floor(Math.random() * frases.length)]
        ); // Responder con un mensaje al usuario.
    },
  };
  