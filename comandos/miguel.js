const frases = [
  "Pero que haces pegandote cuerpo a cuerpo con el top??? JINX AML??? JINXXXXXXXXXX AMLLLL!! 🤬🤬",
  "¿Viene a Despeñaperros Harry Potter?",
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
    name: "miguel",
    description: "Jinx top",
    execute: async function (interaction) {
      await interaction.reply("<@142331963007565824> " + frases[Math.floor(Math.random() * frases.length)]
      ); // Responder con un mensaje al usuario.
  },
};
