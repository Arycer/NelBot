const frases = [
  "Pero que haces pegandote cuerpo a cuerpo con el top??? JINX AML??? JINXXXXXXXXXX AMLLLL!! 🤬🤬",
  "¿Viene a Despeñaperros Harry Potter?",
  "\nNel: Como sigas así a los 22 te mueres.\nMiguel: Como Obama.",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1165834292253958174/Picsart_23-10-23_04-08-13-276.jpg?ex=6600dccb&is=65ee67cb&hm=252a282b8e7fc7b3abc29f213e2397deb0bbcda6c183ecdc991043e2118f65a8&",


]


/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/
module.exports = {
    name: "miguel",
    description: "Jinx top",
    execute: async function (interaction) {
      await interaction.reply("<@142331963007565824> " + frases[Math.floor(Math.random() * frases.length)]
      ); // Responder con un mensaje al usuario.
  },
};
