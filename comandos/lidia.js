const frases = [
    "Yo me la he tragao en el cine y en tos lados. ",
    "\nSamu: La solución buena es ir al psicólogo.\nPero con el dinero que me gasto en el psicólogo me lo puedo gastar en protogemas",
    "https://cdn.discordapp.com/attachments/1034588634764025897/1140742399094685837/Picsart_23-08-14_22-22-49-269.jpg?ex=6601dd25&is=65ef6825&hm=bff803765c8027eb3b7c8c5db732deafc6dd5d3e0b2d24adc8c37d25cdbd23e7&",
    "En el colegio sólo me enseñaron hacer mamadas",
   
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
  