const { REST, Routes } = require('discord.js');
require("dotenv").config();

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
      commands.push(comando.data.toJSON()); // Se añade el comando a la lista de comandos.
    }

    const rest = new REST().setToken(process.env.TOKEN); // Creación de un objeto REST con el token del bot.

    (async () => {
      try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);
        const data = await rest.put(
          Routes.applicationCommands(process.env.CLIENT_ID),
          { body: commands },
        );
    
        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
      } catch (error) {
        console.error(error);
      }
    })();
  },
};

