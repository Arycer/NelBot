const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { data } = require('./kevyn');

const frases = [
    "\nKevyn: Yo tengo una amiga que tiene cáncer y...\nSara: EN CUATRO ME LO MAMA",
    "\nKevyn: Yo les conté que un jugador de valorant se suicidó, y hoy le hicieron un homenaje?\nNel: Entonces, Se suicidaron todos?",
    "NEL, no te voy a perdonar que te dije me voy a comer una avispa",
    "\nKevyn: Me quiero hacer ese corte de pelo\nNel: Pero si no tienes pelo\nKitty: Tiene mas pelo en los huevos que en la cabeza\nSara: Como un kiwi",
    "\nSara, Kevyn y Nel viendo una serie\nKevyn: Que bonito es el cielo\nNel: Que cielo si están enfocando las montañas KEKW\nSara: KEKW\nKevyn se va de la llamada",
    "Tetas, me envias una foto de lidia?",
    "El culo es como el vino, se cata",
    "Yo por el tamaño de culo sé si alguien tiene depresión, es más, os voy a hacer una presentación",
    "No sé cuando hay que pushear, no sé si hay que pushear y además, no hay bomba Kevyn del LoL.",
    "\nhttps://cdn.discordapp.com/attachments/1034588634764025897/1114353714745049209/kevyn2.PNG?ex=65fe25c5&is=65ebb0c5&hm=1b1756656a9123fac4f1a1f196546be21efb60ec4e141962c30998a40397de11& \nNel: Estaba tan confuso que se hírio a si mismo",
    "\nhttps://cdn.discordapp.com/attachments/1034588634764025897/1113213008693440602/b.PNG?ex=660339e7&is=65f0c4e7&hm=4e03581dfdc10ee87da813a1fcd6e9ed6fbcda577b951bad42bd8d1a875cbbdc& \nNel: No se que tiene Kevyn con las madres...",
    "\nhttps://youtu.be/EP0nqKNDfPo\n NENE!!!",
    "Soy un hombre pero también razono",
    "\nSara: Soy Plátano Serpiente\nKevyn: Me gustas",
    "\nKevyn: El agua tiene sabor?\nSara: El awa tiene sabor pero no tiene sabor\nKevyn: Khe?\nSara: El awa tiene sabor pero entre las awas",
    "\nNel: Baila morena, baila morena.\nKevyn: Perreo pa los negros, perreo pa las nenas... Espera quÉ-",
    "Deathmatch en portugués es mâtÁhmâtÁh",
    "\nNel: Me gusta Jugar Reyna!\nKevyn: Me acabo de dar cuenta que me gustan las Negras",
    "\nKevyn: Hablando seriamente y ayudandole a Sebas a aprender viper, Sebas primero que todo valorant es un juego lineal\nXebas: Puedes jugar tu propia leyenda",
    "Cuando vaya a valencia voy a ir a tocarte esas tetas",
    "Hoy descubrí que puedo vibrar mi boca",
    "https://cdn.discordapp.com/attachments/1034588634764025897/1097448124538159114/image.png?ex=66013eb6&is=65eec9b6&hm=744fa6cfda8e7e58fd02c657848092eb9f92673b624c70921fef3b7803469468&",
    "\nPapa de Kevyn: Kevyn.\nKevyn: Dime dime dimeee\nPapa de Kevyn: Yo.. Soy.. tu padre.",
    "\nKevyn: UOO, HAY UN TERMÓMETRO DE CALENTURA.\nNel: Como de calentura?¿\nKevyn: ¿Un termostato no?",
    "\nKevyn y sus paginas sugerentes....\nhttps://cdn.discordapp.com/attachments/1034588634764025897/1094044773515530312/image.png?ex=65fe1798&is=65eba298&hm=727704245f123578c9cdec9aac10431c80684e78fad740933253d6c76c585f9e&",
    "\nKevyn: Alguien tiene sheriff?\nNel: Kevyn metete la sheriff por el culo.\nSara: Yo",
    "\nSara: Coñooo!!\nNel: Ufff que ricoo\nKevyn: Pues la verdad es que antoja\nSara: Cada dia soy mas Asexual",
    "\nLidia: Pero Kevyn... tu tienes tetas???\nKevyn: NO TE PUEDO CREER QUE EL PHEONIX SE HAYA HECHO UN ACEE!!!!",
    "\nLidia: Que es una teta?\nKevyn: Te la enseño?",
    "\nKevyn: Soy lesbiano\nNel: Dirás gay no?\nKevyn: Si eso, espera que?",
    "\nKevyn: A ustedes les gustaria una relacion abierta?\nNel: Joder, esque el Genshin me sube el estado de animo",
    "\nNel: Se cierra rápido como el culo de Kevyn KEKW\nKevyn: Reacción Elemental Torbellino. Cuando Anemo entra en contacto con ciertos elementos, puede activar la reacción de Torbellino. Esta reacción puede causar Daño Elemental correspondiente con el elemento infundido en ella, así como activar otra reacción...",
    "\nNel: A que día de la semana estamos?\nKevyn: A 7",
    "La madre de Kevyn tiene el TLauncher",
    "\nNel: ¿Estás bien, tienes fiebre?\nKevyn: Fiebre de la spike?¿?¿",
    "Quien aguante pierde - Kevyn, creador de juegos desde 2005.",
    "\nNel: yo tuve una ex que me amenazaba con suicidarse si la dejaba y cuando la dejé se tiró de un tercer piso.\nKevyn: Joder, que buena partida.",
    "Me mordieron el culo.",

  ]
  
  
  /*
  Exportación de la función que se ejecuta al llamar al comando "ping".
  */
  

  module.exports = {
    data: new SlashCommandBuilder()
      .setName("kevyn")
      .setDescription("Manopocha y nada más."),
    execute: async function (interaction) {
      const embed = new EmbedBuilder()
        .setTitle("Frases del lore de Kevyn")
        .setDescription(frases[Math.floor(Math.random() * frases.length)])
        .setColor("#ffb7c5")
        .setTimestamp();

      await interaction.reply({ embeds: [embed] }); // Responder con un mensaje al usuario.
  },
};

