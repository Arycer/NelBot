/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/
module.exports = {
    name: "hijosdelserver",
    description: "Que somos en realidad?",
    execute: async function (interaction) {
      await interaction.reply("Desgraciadamente sois todos unos adoptados, pero por si acaso hablarlo con mama y mama (<@869197113374941225> <@477134867465764885>) 🏛"); // Responder con un mensaje al usuario.
    },
  };