const frases = [
  "Todos te queremos deja de morirte gracias ❤❤ ",
  "Iratxe: Mejor nunca que tarde.",

]


/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/
module.exports = {
    name: "iratxe",
    description: "Estara viva o no?",
    execute: async function (interaction) {
      await interaction.reply("<@693617840485302337> " + frases[Math.floor(Math.random() * frases.length)]
      ); // Responder con un mensaje al usuario.
  },
};
