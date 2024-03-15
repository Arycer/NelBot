const frases = [
  "Yo de mayor quiero ser un pezon 😎",
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
    name: "xebas",
    description: "El abuelo mas cotizado de la historia",
    execute: async function (interaction) {
      await interaction.reply("<@311609138918719489> " + frases[Math.floor(Math.random() * frases.length)]
      ); // Responder con un mensaje al usuario.
  },
};
