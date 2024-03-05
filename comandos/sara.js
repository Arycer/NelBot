/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/
module.exports = {
    name: "sara",
    description: "Nuestra Diosa y ninguna más",
    execute: async function (interaction) {
      await interaction.reply("<@477134867465764885> Eres la más hermosa, inteligente, maravillosa y perfecta diosa que existe en el universo!!💛💛"); // Responder con un mensaje al usuario.
    },
  };
  