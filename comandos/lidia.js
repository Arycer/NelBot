const frases = [
    "Yo me la he tragao en el cine y en tos lados. ",
    "\nSamu: La solución buena es ir al psicólogo.\nLidia:Pero con el dinero que me gasto en el psicólogo me lo puedo gastar en protogemas",
    "https://cdn.discordapp.com/attachments/1034588634764025897/1140742399094685837/Picsart_23-08-14_22-22-49-269.jpg?ex=6601dd25&is=65ef6825&hm=bff803765c8027eb3b7c8c5db732deafc6dd5d3e0b2d24adc8c37d25cdbd23e7&",
    "En el colegio sólo me enseñaron hacer mamadas",
    "\nLidia: Completa la misión protegiendo a Manolito.\nNel: Monolito Lidia.\nLidia: Y quien es Monolito? Un animal?",
    "\nLidia hablando sobre que Kevyn de si era pakistani o no\nNel: Es colombiano no pakistani\nLidia: Peor\nNel: Oye lidia una duda, a ti tambien te tiro la caña Kevyn? es que no te lo pude preguntar en su tiempo y tengo la curiosidad\nLidia: No soy de pillar las indirectas de las cañas pero si se la tiro a todas pues...\nNel: Por regla de 3 también te la tiro a ti es lo que quieres decir???\nLidia: Si KEK\nNel: KEK",
    "\nLidia contando sobre ser reportera o repostera\nLidia: Pues la verdad los pavos que crearon el pan con tumaca son unos friquis",
    "\nYisus:Me intentas vender esa chica ?\nLidia: No, es rubia",
    "\nLidia: Me corto las venas?\nNel: Illo?, Se fue el Presidente de Mostoles?",
    "\nLidia: Pero Kevyn... tu tienes tetas???\nKevyn: NO TE PUEDO CREER QUE EL PHEONIX SE HAYA HECHO UN ACEE!!!!",
    "\nLidia: Que es una teta?\nKevyn: Te la enseño?",
    "En verdar Hitler era atractivo, sin bigote - Lidia, la menos nazi.",
    "\nSara: ¿Es lesbiana?\nLidia: Hmmm, creo que era libra",
    
    
    
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
  