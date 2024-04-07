const frases = [
  "Cuando ni ChatGPT puede ayudarte, aparecen las verdaderas diosas del Olympo a ayudarte. Gracias por todo, te orare todos los años con arroz y una tarta de fresa 🍰",
  "A mi me gusta jugar al LOL - Pau 2024 (nunca tuvo infancia jugando a los Arams)",
  "🏳️‍⚧️",

  
]

/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/

module.exports = {
    name: "pau",
    description: "Las heroinas pueden no llevar capas",
    execute: async function (interaction) {
      await interaction.reply(
        "<@487214130466521088> " + frases[Math.floor(Math.random() * frases.length)]
        ); // Responder con un mensaje al usuario.
    },
  };