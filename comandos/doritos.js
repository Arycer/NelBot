const frases = [
    "\nDoritos siendo abstemia\nhttps://cdn.discordapp.com/attachments/1016438591309762581/1220437403433566349/IMG_20240321_192150.jpg?ex=660eefe7&is=65fc7ae7&hm=1b61394bbe614fe2b3ba0d18ef9c0e649f7fc96b1ba55e0f5d9af493ef34c1a3&",
    
   
  
  ]
  
  
  /*
  Exportación de la función que se ejecuta al llamar al comando "ping".
  */
  
  module.exports = {
      name: "doritos",
      description: "Aparecera de nuevo?",
      execute: async function (interaction) {
        await interaction.reply("<@1063207469859487745> " + frases[Math.floor(Math.random() * frases.length)]
        ); // Responder con un mensaje al usuario.
    },
  };
  