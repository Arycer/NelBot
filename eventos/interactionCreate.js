/*
Exportación de la función que maneja la creación de interacciones (comandos ejecutados por usuarios)
*/
module.exports = {
  name: "interactionCreate",
  execute: async function (interaction, client) {
    if (!interaction.isCommand) {
      // Si la interacción no es un comando, no se hace nada.
      return;
    }

    /*
    Obtención del nombre del comando y del comando correspondiente.
    */
    const nombreComando = interaction.commandName; // Nombre del comando.
    const comando = client.commands.find(
      (comando) => comando.name === nombreComando, // Buscar el comando con el nombre correspondiente.
    );

    if (!comando) {
      // Si no se encuentra el comando, se responde que no existe.
      interaction.reply("No existe el comando");
      return;
    }

    /*
    Ejecución del comando con un manejo de errores de manera que si hay un error al ejecutar el comando, se responda al usuario.
    */
    try {
      // Ejecutar el comando.
      await comando.execute(interaction);
    } catch (error) {
      // Si hay un error al ejecutar el comando:
      console.error(error); // Imprimir el error en la consola.
      interaction.reply("Hubo un error al ejecutar el comando"); // Responder al usuario que hubo un error.
    }
  },
};
