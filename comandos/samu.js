const frases = [
  "Para cuando el edredón con tus tetas para Nel?? 😋😋",
  "Samu en sus días libres: https://cdn.discordapp.com/attachments/1034588634764025897/1157061180016296036/samu.jpg?ex=6605dc32&is=65f36732&hm=688d0e2dfdd9401fb41218c1e58f1d96fd8514f5eb82cfa2daeebf62e108dc77&",
  "\nSamu: La verdad que el edredón debe de ser un poco curioso.\nSara: El mio?\nSamu: No, el de mis tetas.",
  "\nNel: No puedo sentir pena por alguien inferior a mi\nSamu: NO TIO, el brazo izquierdo me vuelve a bailar",
  "A Samu le falta 3 dedos y por ende su cancion favorita es esta: https://www.youtube.com/watch?v=YsDPoDclP6k&ab_channel=LeonelAlv",
  "No sabes lo solo que estoy Marta ",
  
 

]


/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/
module.exports = {
    name: "samuel",
    description: "Ser o no ser",
    execute: async function (interaction) {
      await interaction.reply("<@280289709316505602> " + frases[Math.floor(Math.random() * frases.length)]
      ); // Responder con un mensaje al usuario.
  },
};
