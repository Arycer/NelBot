const frases = [
  "Eres la más hermosa, inteligente, maravillosa y perfecta diosa que existe en el universo!!💛💛",
  "Jugar al genshin parece un entrenamiento de lesbiana.",
  "Me quiero meter un pokemon por la bocaEsto es como un huevo de pollito, si lo intentas forzar a que cambie lo revientas, asi que tiene que eclosionar desde dentro mientras le das calor desde fuera. Si le das calor y no eclosiona pues ESTA MUERTO COMO TU EX.",
  "De todas formas yo tengo que envolver un regalo, podeis seguir viendo porno.",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1192596716554293329/rojo.PNG?ex=6605f03e&is=65f37b3e&hm=f43ed6bb828435db0d0f4d924259c442721ee9001fcde3a6839839a810a97a12&", 
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
    name: "sara",
    description: "Nuestra Diosa y ninguna más",
    execute: async function (interaction) {
      await interaction.reply(
        "<@477134867465764885> " + frases[Math.floor(Math.random() * frases.length)]
        ); // Responder con un mensaje al usuario.
    },
  };
  