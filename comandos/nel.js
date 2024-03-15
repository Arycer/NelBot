const frases = [
  "Eres la segunda mejor diosa perfecta que existe por que la primera es Sara... por cierto... te tengo que llamar mama?? 🖤🖤",
  "Lo primero que pensé fue esto: A samu le gusta que se la metan",
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
    name: "nel",
    description: "Diosa de la creación y puta personal de la Diosa",
    execute: async function (interaction) {
      await interaction.reply("<@869197113374941225> " + frases[Math.floor(Math.random() * frases.length)]
      ); // Responder con un mensaje al usuario.
  },
};
