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
    name: "nel",
    description: "Diosa de la creación y puta personal de la Diosa",
    execute: async function (interaction) {
      await interaction.reply("<@869197113374941225> " + frases[Math.floor(Math.random() * frases.length)]
      ); // Responder con un mensaje al usuario.
  },
};
