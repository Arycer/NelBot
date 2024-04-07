const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { data } = require('./nel');

const frases = [
  "Eres la segunda mejor diosa perfecta que existe por que la primera es Sara... por cierto... te tengo que llamar mama?? 🖤🖤",
  "Lo primero que pensé fue esto: A samu le gusta que se la metan",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1176161045384007690/image.png?ex=66018455&is=65ef0f55&hm=2fd05c34aa331764abb3f765e0a92c6c2cce85fbc8d902ac404718372e794805&",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1141926881860517968/image.png?ex=66062c48&is=65f3b748&hm=353652e595cb47bd15b4e524c532e374241bb9968bb0f01967aa72477d29a749&",
  "\nSara: Léelo tu que parece ser que tú familia es de sordos\nNel: No, mi familia es de gente normal",
  "\nContexto: Juego de Omori\nSara: Es que cuando usas apuñalar después del poema triste te aumenta el daño\nNel: Esta bien que al estar triste aumente el daño de apuñalar, solo le queda aprender suicidar y que diga que es superefectivo",
  "\nNel: AY, HAY TRES\nSara: DA IGUAL SOMOS DOS\n🤡 Nos morimos 🤡",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1181004147105988679/image.png?ex=6600add2&is=65ee38d2&hm=0469abff46943e7b691506b0e0fd380ab87951ebd36ec310c8feff5fca69ec81&",
  "\nSara: No se dice Breshka, se dice Bershka.\nNel: Yo que se, es el acento andaluz, hablamos así.\nSara: Yo soy andaluza y lo digo bien, que pasa que no sabes leer?\nNel: Sara somos andaluces, mucho que sabemos leer.",
  "\nNel 2 horas seguidas hablando con Iratxe en llamada\nhttps://tenor.com/view/no-gif-23548728",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1147325572238815282/ballena.PNG?ex=65fe20b4&is=65ebabb4&hm=d23321f88a8a45944c6fbf7487be378c48a30b89063a5cb590aa6a0044937c14&",
  "\nJugando al LOL\nNel: Tenemos que pushear a saco. \nSara: Tenemos que pushear a Shaco?\nhttps://cdn.discordapp.com/attachments/1034588634764025897/1142310557282742385/segundos.jpg?ex=65fe571b&is=65ebe21b&hm=e525d11407a7fadb3921eed8521c76e2f7d36650a9dd2e1aac14eb3ffdbb3dbc&",
  "\nNel: Ahora solo falta que vuelva Shaco\nEl Shaco vuelve a venir\nLA NEL EN CORTO:\nhttps://cdn.discordapp.com/attachments/1034588634764025897/1142320872900808744/shaco_1_online-video-cutter.com.mp4?ex=65fe60b7&is=65ebebb7&hm=aea15c52a01f9f57cd8ee651fcf71c730fd245265cced0232279ccc90648a2b2&",
  "\nNel: Me voy a cagar en sus muertos.\nSara: No te cagues en sus muertos porque hay un anime de un apocalipsis zombie que lo explica ",
  "\n4:50 am\nNel:\nhttps://cdn.discordapp.com/attachments/1034588634764025897/1135405075498537033/Picsart_23-07-31_04-50-36-403.jpg?ex=6600e760&is=65ee7260&hm=efa37bed5a4dd3ee872e49903359b9e5efbb6326e6f49f89ea19c4617e4c759c& \nhttps://cdn.discordapp.com/attachments/1034588634764025897/1135405242889031690/Picsart_23-07-31_04-54-54-494.jpg?ex=6600e788&is=65ee7288&hm=2a457cce729455920a737656082ba811eb767be3f172677f0f35868517eba34f&",
  "\nKevyn: Yo les conté que un jugador de valorant se suicidó, y hoy le hicieron un homenaje?\nNel: Entonces, Se suicidaron todos?",
  "Ketty",
  "\nSara, Kevyn y Nel viendo una serie\nKevyn: Que bonito es el cielo\nNel: Que cielo si están enfocando las montañas KEKW\nSara: KEKW\nKevyn se va de la llamada",
  "\nNel: ¿ Tan difícil es encontrar una pareja mayor de edad (20 años) que no sea toxica, que no me manipule y que sea normal?\nKitty: Sí\nNel: Tu puta madre Kitty, yo solo quería algo de apoyo\nKitty: ¿Shashimi?\nNel: Sí.",
  "\nhttps://youtu.be/EP0nqKNDfPo\n NENE!!!",
  "Soñé que estábamos los de TLG jugando a la petanca.",
  "\nLidia: Me corto las venas?\nNel: Illo?, Se fue el Presidente de Mostoles?",
  "\nSora: DELANTERO DEL RAIMON?!?1\nNel: DELANTERO DEL REAL BETI BALOMPIÉ\nSora: pues es portero, por la cara",
  "\nKevyn: espérate que no escucho nada\nNel: el teclado y los cascos son instrumentos diferentes, espera qué",
  "Una se suicida y la otra le aplaude, de locos.",
  "\nKevyn y sus paginas sugerentes....\nhttps://cdn.discordapp.com/attachments/1034588634764025897/1094044773515530312/image.png?ex=65fe1798&is=65eba298&hm=727704245f123578c9cdec9aac10431c80684e78fad740933253d6c76c585f9e&",
  "\nNel: ¿Vas a hacer eso?\nSora: ¿El qué?\nNel: Lo del Shingenshin",
  "Cría malvas y te sacarán los cuervos - Nel, bióloga.",
  "\nKevyn: Alguien tiene sheriff?\nNel: Kevyn metete la sheriff por el culo.\nSara: Yo",
  "\nSara: Coñooo!!\nNel: Ufff que ricoo\nKevyn: Pues la verdad es que antoja\nSara: Cada dia soy mas Asexual",
  "\nKevyn: Soy lesbiano\nNel: Dirás gay no?\nKevyn: Si eso, espera que?",
  "Ojalá te atragantes con los huevos",
  "Ahora me desputeo",
  "\nKevyn: A ustedes les gustaria una relacion abierta?\nNel: Joder, esque el Genshin me sube el estado de animo",
  "Se cierra rápido como el culo de Kevyn KEKW",
  "\nNel: el gato escupiendo una bola de pelos GRUAAGHESWS\nSara: ℱ𝒶𝓉𝒶𝓁𝒾𝓉𝓎.",
  "Me cago en los triángulos - Nel, 22 años. No le va mucho la geometría.",
  "\nSara: TÍO QUE TENGO ALGO EN LA GARGANTA Y NO SE QUE ES\nNel: La campanilla.",
  "Esto ya se pasa de castaño a extremo - Nel, Técnica en colorimetría y en extremos.",
  "\nSara: Hay veces que me siento linda y otras veces no tanto\nNel: BUAH, ME LÍO UN PORRO COMO MARTIN BUTAGREÑO",
  "Para que tener amigos, ten enemigos",
  "No quiero que vuelvas, no quiero jugar al lol",
  "Chi",
  "Puedo ser bizco pero no tonto - Nel Sánche del Polígono 14",
  "Joder, el negro vuelve a dar oro.",
  "\nSamu: Mañana es tu cumple nell.\nNell: Lo se, mañana metere 100€ al honkai.",
  "\n**Actualización del Honkai Star Rail**\nhttps://cdn.discordapp.com/attachments/1034588634764025897/1222629553147613285/image.png?ex=6616e980&is=66047480&hm=c5332d3f11fbf0501a472f0d6dcfa15ba6e3919d63fdc5461269a212b1e2d900&",
  

]


/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/

module.exports = {
  data: new SlashCommandBuilder()
    .setName("nel")
    .setDescription("Mi diosa y creadora, te quiero mami ❤❤"),
  execute: async function (interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Frases del lore de Nel")
      .setDescription(frases[Math.floor(Math.random() * frases.length)])
      .setColor("#ffb7c5")
      .setTimestamp();

    await interaction.reply({ embeds: [embed] }); // Responder con un mensaje al usuario.
},
};

