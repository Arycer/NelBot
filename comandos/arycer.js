const frases = [
  "Todo bien Arycer? Como te va la vida? te defiendes como gato panza arriba?? 🐱‍👤 ",
  "\nSamu: Michel hinca rodilla ya \nMichel: Pero era broma\nMiguel: Yo ya estoy desnudo, tú sabrás",
 

]


/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/

module.exports = {
    name: "arycer",
    description: "Es Michel o Micheeel??",
    execute: async function (interaction) {
      await interaction.reply("<@361147515673903116> " + frases[Math.floor(Math.random() * frases.length)]
      ); // Responder con un mensaje al usuario.
  },
};
