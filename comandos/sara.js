const frases = [
  "Eres la más hermosa, inteligente, maravillosa y perfecta diosa que existe en el universo!!💛💛",
  "Jugar al genshin parece un entrenamiento de lesbiana.",
  "Me quiero meter un pokemon por la bocaEsto es como un huevo de pollito, si lo intentas forzar a que cambie lo revientas, asi que tiene que eclosionar desde dentro mientras le das calor desde fuera. Si le das calor y no eclosiona pues ESTA MUERTO COMO TU EX.",
  "De todas formas yo tengo que envolver un regalo, podeis seguir viendo porno.",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1192596716554293329/rojo.PNG?ex=6605f03e&is=65f37b3e&hm=f43ed6bb828435db0d0f4d924259c442721ee9001fcde3a6839839a810a97a12&", 
  "Me como un pollo... y una polla",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1173449062729646181/image.png?ex=6600e11a&is=65ee6c1a&hm=82c245ff69c43d6d33379398ef138cd5dd84e5dd414ce22bf5ca95cca2bc06d0&",
  "Yo antes de un examen: https://cdn.discordapp.com/attachments/1034588634764025897/1170871102034161724/image.png?ex=6600bab0&is=65ee45b0&hm=150b272ca7f26159cd165f9c50ab1fa0a332592c773c211fe735b6c2fceb088a&",
  "Quiero ser Putin para ser la villana en la historia de Biyin",
  "Soy un petardo",
  "Nel:Es un bot \nSara: No es un bot, se llama Jesuslachimba",
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
    name: "sara",
    description: "Nuestra Diosa y ninguna más",
    execute: async function (interaction) {
      await interaction.reply(
        "<@477134867465764885> " + frases[Math.floor(Math.random() * frases.length)]
        ); // Responder con un mensaje al usuario.
    },
  };
  