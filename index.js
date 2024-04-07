const { Client, ActivityType } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const MeowDB = require("meowdb");
const ALL_INTENTS = 8;
require("dotenv").config();

/*
Creación del cliente de Discord con los permisos necesarios para el bot.
*/
const client = new Client({
  intents: ALL_INTENTS,
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  presence: {
    activities: [
      {
        name: "Gachapones con tus sentimientos",
        type: ActivityType.PLAYING,
      },
    ],
    status: "online",
  },
});

client.database = new MeowDB({
  dir: __dirname,
  name: "database",
});

/*
Creación de una lista para guardar los comandos.
*/
client.commands = [];

/*
Lectura de la carpeta de comandos y carga de los comandos en la lista.
*/
const carpetaComandos = join(__dirname, "comandos"); // __dirname es la ruta del archivo actual.
const archivosComandos = readdirSync(carpetaComandos); // readdirSync lee los archivos de una carpeta.

/*
Iteración sobre los archivos de comandos para cargarlos en la lista.
*/
for (const archivo of archivosComandos) {
  // Por cada archivo en la carpeta de comandos:
  const archivoRuta = join(carpetaComandos, archivo); // Se obtiene la ruta del archivo.
  const comando = require(archivoRuta); // Se carga el archivo como un módulo.
  client.commands.push({
    // Se agrega el comando a la lista de comandos.
    data: comando.data,
    execute: comando.execute,
  });
}

/*
Lectura de la carpeta de eventos y carga de los eventos en el cliente.
*/
const carpetaEventos = join(__dirname, "eventos");
const archivosEventos = readdirSync(carpetaEventos);

/*
Iteración sobre los archivos de eventos para cargarlos en el cliente.
*/
for (const archivo of archivosEventos) {
  // Por cada archivo en la carpeta de eventos:
  const archivoRuta = join(carpetaEventos, archivo); // Se obtiene la ruta del archivo.
  const evento = require(archivoRuta); // Se carga el archivo como un módulo.
  client.on(evento.name, (...args) => evento.execute(...args, client)); // Se agrega el evento al cliente.
}

client.login(process.env.TOKEN); // Se inicia sesión en Discord con el token del bot.
