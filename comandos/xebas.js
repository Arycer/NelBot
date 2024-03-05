k/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/
module.exports = {
    name: "xebas",
    description: "El abuelo mas cotizado de la historia",
    execute: async function (interaction) {
      await interaction.reply("<@311609138918719489> Yo de mayor quiero ser un pezon 😎"); // Responder con un mensaje al usuario.
    },
  };