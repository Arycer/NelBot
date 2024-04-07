const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { data } = require('./sara');

const frases = [
  "Eres la más hermosa, inteligente, maravillosa y perfecta diosa que existe en el universo!!💛💛",
  "Jugar al genshin parece un entrenamiento de lesbiana.",
  "Me quiero meter un pokemon por la bocaEsto es como un huevo de pollito, si lo intentas forzar a que cambie lo revientas, asi que tiene que eclosionar desde dentro mientras le das calor desde fuera. Si le das calor y no eclosiona pues ESTA MUERTO COMO TU EX.",
  "De todas formas yo tengo que envolver un regalo, podeis seguir viendo porno.",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1192596716554293329/rojo.PNG?ex=6605f03e&is=65f37b3e&hm=f43ed6bb828435db0d0f4d924259c442721ee9001fcde3a6839839a810a97a12&", 
  "\nContexto: Sara jugando a un minijuego de Genshin\nMe como un pollo... y una polla",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1173449062729646181/image.png?ex=6600e11a&is=65ee6c1a&hm=82c245ff69c43d6d33379398ef138cd5dd84e5dd414ce22bf5ca95cca2bc06d0&",
  "Yo antes de un examen: https://cdn.discordapp.com/attachments/1034588634764025897/1170871102034161724/image.png?ex=6600bab0&is=65ee45b0&hm=150b272ca7f26159cd165f9c50ab1fa0a332592c773c211fe735b6c2fceb088a&",
  "Quiero ser Putin para ser la villana en la historia de Biyin",
  "Soy un petardo",
  "\nNel:Es un bot \nSara: No es un bot, se llama Jesuslachimba",
  "Todas las excusas que me dices son minutos pasando",
  "\nContexto: Viendo Mushoku Tensei II\nSara: Rectifico, el anime se llama Unas bragas, mi pito y yo\nSamu: Esto mejora por momentos.\nKitty: ¿Por qué hay un gorila con tetas?\nSamu: Es el verdadero Manolo.",
  "\nSara: No paran de salirme anuncios guarros en AnimeFLV\nNel: Hay un chochito cerca de tu zona\nSamu: No sabes lo solo que estoy Marta",
  "\nSara: Yo, me miro al espejo y pienso Joder, en verdad tengo toa la cara de un Stitch\nMichel: ❓",
  "\nSara: Alguna vez habéis probado un nabo?\nSergio: A mi me encanta los nabos\nSara: Yo si me he comido un nabo, lo hice sin darme cuenta\nNel: Madre mía, esto se va para el lore que flipas",
  "\nSara: CREEEEO QUE EMPIEZO A ENTENDER , NOHAYEXCUSA NOHAYEXCUSA NOHAYEXCUSA\nNel: ¿Qué estas cantando?\nSara: La de Shakira\nNel: ¿Estas segura que es asi?\nSara: Sí, mira\nLa cancion en cuestion:\nhttps://cdn.discordapp.com/attachments/1034588634764025897/1162168303897296967/2023-10-13_01-18-12.mp4?ex=6605fb93&is=65f38693&hm=17b4a1f9d31c3aa19752525cefad35f7f2186b760f0d12fc3a53f4b9d98efb87&",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1215833697601982605/image.png?ex=65fe305e&is=65ebbb5e&hm=7649f7c6313ec5ab0e8994d88a9865ff7e41bfb37ffba44bc1bf1497a9fd7740&",
  "\nEstudiante promedio de FP:\nhttps://cdn.discordapp.com/attachments/1034588634764025897/1178208130140745809/image.png?ex=65ffbc54&is=65ed4754&hm=df2220aa21f69ac16de5832d80b9d32b1a6c89fc61fcb9b3baee961a5c1204eb&",
  "100% Polyester",
  "<@869197113374941225> haciendo compras online:\nhttps://cdn.discordapp.com/attachments/1034588634764025897/1164646375829553152/image.png?ex=6605c4f6&is=65f34ff6&hm=3b8f266c61eba693cf2438a017c579c2b2a7cdc1c18021ad7eae537100ccd17c&\nNel: Eres tan lindoo",
  "\nSara leyéndole el libro de filosofía a Nel\nSara: Has visto que filosófico es mi nuevo árbol polla?\n\n(Su justificación: Es que en la siguiente frase ponía polla)\nRealidad: Ponía árbol",
  "\nMy honest reaction:\nhttps://cdn.discordapp.com/attachments/1034588634764025897/1135399453319233666/Picsart_23-07-31_04-31-35-162.jpg?ex=6600e224&is=65ee6d24&hm=2fc03587eb6bc41a61c603ec3837f62d23676a944805676950a745391e4e9ccd&",
  "\nKevyn: Yo tengo una amiga que tiene cáncer y...\nSara: EN CUATRO ME LO MAMA",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1115243179713773648/IMG-20230531-WA0005.jpg?ex=66016226&is=65eeed26&hm=1c07bb76674c61a198ef86be3503afae6f043e76ce72ea00671c1c3a8c8e9b54&",
  "Tengo dislexia emocional",
  "\nJugando a un juego de disparos\nSara: No dispares que me asusto",
  "\nhttps://youtu.be/EP0nqKNDfPo\n NENE!!!",
  "Arroz-",
  "\nSara: Me voy a ahogar en sus tetas.\nKitty: Hazlo por mi.",
  "\nKevyn: El agua tiene sabor?\nSara: El awa tiene sabor pero no tiene sabor\nKevyn: Khe?\nSara: El awa tiene sabor pero entre las awas",
  "Me siento como el parabrisas de un coche",
  "Pero ustedes habéis visto alguna vez un tronco.",
  "Con hambre no puedo comer!!!",
  "Ya me he metido todo el ketchup en los pantalones",
  "\nSora: DELANTERO DEL RAIMON?!?1\nNel: DELANTERO DEL REAL BETI BALOMPIÉ\nSora: pues es portero, por la cara",
  "Por una vez que se me da bien chupar.",
  "Nel callate que no veo!!",
  "\nTxebas: que tal sora como estas?\nSara: tu puta madre",
  "\nSara: Coñooo!!\nNel: Ufff que ricoo\nKevyn: Pues la verdad es que antoja\nSara: Cada dia soy mas Asexual",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1078809000612745296/image.png?ex=65fe092d&is=65eb942d&hm=0164b4d4c4077dd1f876bf6d24cac810b7adccca4ee2d5ddff2ca93b24f24114&",
  "Me he clavado un hueso en el culo",
  "\nNel: Ve por donde sale el viento\nSara: Pero no veo el viento por que es transparente",
  "Sáquenme de Movistar - Sara, harta de jugar al PlantasVsZombies.",
  "\nNel: Ponle Kevyn al Pokémon.\nSara: No, porque es hembra. Le pega mejor Fregona.",
  "Mi profesor de servicios en red huele muy bien - Sara ( demasiado bien).",
  "\nNel: Sara yo te trato mal?\nSara: A veces\nNel: Como que a veces?\nSara: Cuando me sacas el látigo.",
  "Chi",
  "La virgen como chupa",
  "No hay que matarla, como la mates no podemos jugar al Croquet",
  "No seré bizco pero soy tonto - Sara Fernández, residente de las 3000 Viviendas",
  "Aquí vi a un señor con muchos piercings pero con pocos brazos, en plan, era manco.",
  "No soy homófoba, pero a mi que no se me acerquen ni judíos, gitanos, afrodescendientes, indígenas americanos, aborígenes australianos, maoríes, pueblos indígenas de Canadá, mayas, aztecas, zapotecas, mixtecos, quechuas, aymaras, mapuches, guaraníes, tibetanos, uigures, rohingyas, kurdos, armenios, tamiles, palestinos, chechenos, hazaras, baluchis, pashtunes, tutsis, hutus,nigerianos,beréberes, bantúes, dalits, yazidíes, assyrios, coptos, kurdistán iraquí, hmong, ashkenazíes, romaníes, sinti, pueblos indígenas de Laponia, chinos, ucranianos , bielorrusos, rusos , estonios, letones , lituanos, armenios, georgios, circasianos, rohingya, karen, nons, shan, karreni ,kachin, karen, rohingya, dinka, nuer, bari, zande, maasai,t uareg, amazigh .",
  "No para de dolerte la boca de comer pitos.",
  "Tio nacho levántate.",
  "Sara llorando: Soy un pimpollo. Un pimpollo de Maokai.",
  "La maleta mide bien y pesa mejor.",
  "QUITARMELO DEL MEDIOOO!!! Un negro me está siguiendo",
  "Chicos, no me gusta jugar a la ruleta. Solo puedes apostar al rojo o al negro, y ninguno de los dos me gusta.",
  "Me gustan los palestinos, me recuerdan al PetaZeta.",
  

]


/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sara")
    .setDescription("Nuestra diosa y ninguna más."),
  execute: async function (interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Frases del lore de Sara")
      .setDescription(frases[Math.floor(Math.random() * frases.length)])
      .setColor("#ffb7c5")
      .setTimestamp();

    await interaction.reply({ embeds: [embed] }); // Responder con un mensaje al usuario.
},
};

