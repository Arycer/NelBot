const frases = [
  "Eres la más hermosa, inteligente, maravillosa y perfecta diosa que existe en el universo!!💛💛",
  "Jugar al genshin parece un entrenamiento de lesbiana.",
  "Me quiero meter un pokemon por la bocaEsto es como un huevo de pollito, si lo intentas forzar a que cambie lo revientas, asi que tiene que eclosionar desde dentro mientras le das calor desde fuera. Si le das calor y no eclosiona pues ESTA MUERTO COMO TU EX.",
  "De todas formas yo tengo que envolver un regalo, podeis seguir viendo porno.",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1192596716554293329/rojo.PNG?ex=6605f03e&is=65f37b3e&hm=f43ed6bb828435db0d0f4d924259c442721ee9001fcde3a6839839a810a97a12&", 
  "\nContexto: Sara jugando a un minijuego de Genshin\nMe como un pollo... y una polla",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1173449062729646181/image.png?ex=6600e11a&is=65ee6c1a&hm=82c245ff69c43d6d33379398ef138cd5dd84e5dd414ce22bf5ca95cca2bc06d0&",
  "Yo antes de un examen: https://cdn.discordapp.com/attachments/1034588634764025897/1170871102034161724/image.png?ex=6600bab0&is=65ee45b0&hm=150b272ca7f26159cd165f9c50ab1fa0a332592c773c211fe735b6c2fceb088a&",
  "Quiero ser Putin para ser la villana en la historia de Biyin",
  "Soy un petardo",
  "Nel:Es un bot \nSara: No es un bot, se llama Jesuslachimba",
  "Todas las excusas que me dices son minutos pasando",
  "\nContexto: Viendo Mushoku Tensei II\nSara: Rectifico, el anime se llama Unas bragas, mi pito y yo\nSamu: Esto mejora por momentos.\nKitty: ¿Por qué hay un gorila con tetas?\nSamu: Es el verdadero Manolo.",
  "\nSara: No paran de salirme anuncios guarros en AnimeFLV\nNel: Hay un chochito cerca de tu zona\nSamu: No sabes lo solo que estoy Marta",
  "\nSara: Yo, me miro al espejo y pienso Joder, en verdad tengo toa la cara de un Stitch\nMichel: ❓",
  "\nSara: Alguna vez habéis probado un nabo?\nSergio: A mi me encanta los nabos\nSara: Yo si me he comido un nabo, lo hice sin darme cuenta\nNel: Madre mía, esto se va para el lore que flipas",
  "\nSara: CREEEEO QUE EMPIEZO A ENTENDER , NOHAYEXCUSA NOHAYEXCUSA NOHAYEXCUSA\nNel: ¿Qué estas cantando?\nSara: La de Shakira\nNel: ¿Estas segura que es asi?\nSara: Sí, mira\nLa cancion en cuestion:\nhttps://cdn.discordapp.com/attachments/1034588634764025897/1162168303897296967/2023-10-13_01-18-12.mp4?ex=6605fb93&is=65f38693&hm=17b4a1f9d31c3aa19752525cefad35f7f2186b760f0d12fc3a53f4b9d98efb87&",
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
  