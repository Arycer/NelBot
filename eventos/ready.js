const { readdirSync } = require("fs");
const { join } = require("path");

/*
Exportación de la función que maneja el inicio del bot.
*/
module.exports = {
  name: "ready",
  execute: function (client) {
    console.log(`Bot listo como ${client.user.tag}!`);

    // Creación de una lista para guardar los comandos.
    const commands = [];

    /*
    Iteración sobre los archivos de comandos para cargarlos en la lista.
    */
    for (const comando of client.commands) {
      // Por cada comando en la lista de comandos, se agrega a la lista de comandos de Discord.
      commands.push({
        name: comando.name,
        description: comando.description,
        options: comando.options,
      });
    }

    // Se establecen los comandos en Discord.
    client.application.commands.set(commands);
  },
};
