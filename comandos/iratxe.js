/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/
module.exports = {
    name: "iratxe",
    description: "Estara viva o no?",
    execute: async function (interaction) {
      await interaction.reply("<@693617840485302337> Todos te queremos deja de morirte gracias ❤❤ "); // Responder con un mensaje al usuario.
    },
  };