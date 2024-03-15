const frases = [
  "Eres la segunda mejor diosa perfecta que existe por que la primera es Sara... por cierto... te tengo que llamar mama?? 🖤🖤",
  "Lo primero que pensé fue esto: A samu le gusta que se la metan",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1176161045384007690/image.png?ex=66018455&is=65ef0f55&hm=2fd05c34aa331764abb3f765e0a92c6c2cce85fbc8d902ac404718372e794805&",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1141926881860517968/image.png?ex=66062c48&is=65f3b748&hm=353652e595cb47bd15b4e524c532e374241bb9968bb0f01967aa72477d29a749&",
  "\nSara: Léelo tu que parece ser que tú familia es de sordos\nNel: No, mi familia es de gente normal",
  "\nContexto: Juego de Omori\nSara: Es que cuando usas apuñalar después del poema triste te aumenta el daño\nNel: Esta bien que al estar triste aumente el daño de apuñalar, solo le queda aprender suicidar y que diga que es superefectivo",
  "\nNel: AY, HAY TRES\nSara: DA IGUAL SOMOS DOS\n🤡 Nos morimos 🤡",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1181004147105988679/image.png?ex=6600add2&is=65ee38d2&hm=0469abff46943e7b691506b0e0fd380ab87951ebd36ec310c8feff5fca69ec81&",
  "\nSara: No se dice Breshka, se dice Bershka.\nNel: Yo que se, es el acento andaluz, hablamos así.\nSara: Yo soy andaluza y lo digo bien, que pasa que no sabes leer?\nNel: Sara somos andaluces, mucho que sabemos leer.",
  "\nNel 2 horas seguidas hablando con Iratxe en llamada\nhttps://tenor.com/view/no-gif-23548728",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1147325572238815282/ballena.PNG?ex=65fe20b4&is=65ebabb4&hm=d23321f88a8a45944c6fbf7487be378c48a30b89063a5cb590aa6a0044937c14&",
  "\nJugando al LOL\nNel: Tenemos que pushear a saco. \nSara: Tenemos que pushear a Shaco?\nhttps://cdn.discordapp.com/attachments/1034588634764025897/1142310557282742385/segundos.jpg?ex=65fe571b&is=65ebe21b&hm=e525d11407a7fadb3921eed8521c76e2f7d36650a9dd2e1aac14eb3ffdbb3dbc&",
  "\nNel: Ahora solo falta que vuelva Shaco\nEl Shaco vuelve a venir\nLA NEL EN CORTO:\nhttps://cdn.discordapp.com/attachments/1034588634764025897/1142320872900808744/shaco_1_online-video-cutter.com.mp4?ex=65fe60b7&is=65ebebb7&hm=aea15c52a01f9f57cd8ee651fcf71c730fd245265cced0232279ccc90648a2b2&",
  "\nNel: Me voy a cagar en sus muertos.\nSara: No te cagues en sus muertos porque hay un anime de un apocalipsis zombie que lo explica ",
  "\n4:50 am\nNel:\nhttps://cdn.discordapp.com/attachments/1034588634764025897/1135405075498537033/Picsart_23-07-31_04-50-36-403.jpg?ex=6600e760&is=65ee7260&hm=efa37bed5a4dd3ee872e49903359b9e5efbb6326e6f49f89ea19c4617e4c759c& \nhttps://cdn.discordapp.com/attachments/1034588634764025897/1135405242889031690/Picsart_23-07-31_04-54-54-494.jpg?ex=6600e788&is=65ee7288&hm=2a457cce729455920a737656082ba811eb767be3f172677f0f35868517eba34f&",
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
    name: "nel",
    description: "Diosa de la creación y puta personal de la Diosa",
    execute: async function (interaction) {
      await interaction.reply("<@869197113374941225> " + frases[Math.floor(Math.random() * frases.length)]
      ); // Responder con un mensaje al usuario.
  },
};
