const frases = [
  "Loco vamos 0/5, 0/5, 2/3, tu de verdad te crees que yo doy algo de oro?, TU DE VERDAD, SE TE PASA EN LA CABEZA?? QUE DOY ORO!!?? 🤬😡🤬",
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
    name: "kitty",
    description: "Kitty en ranked",
    execute: async function (interaction) {
      await interaction.reply("<@654388064998653958> " + frases[Math.floor(Math.random() * frases.length)]
      ); // Responder con un mensaje al usuario.
  },
};
