const frases = [
  "Loco vamos 0/5, 0/5, 2/3, tu de verdad te crees que yo doy algo de oro?, TU DE VERDAD, SE TE PASA EN LA CABEZA?? QUE DOY ORO!!?? 🤬😡🤬",
  "Pero tu te escuchas cuando hablo brother?",
  "La alfombrilla del raton de Kitty: https://cdn.discordapp.com/attachments/1034588634764025897/1183270688430243850/image.png?ex=65ffb234&is=65ed3d34&hm=d582cf684c3444818af09c1ac324060661638a7d0e4b023f92dbb9cc640a80a6& ",
  "Mejor por la boca que por el culo",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1174137989341917266/image.png?ex=660362b7&is=65f0edb7&hm=4c6e96813e94d39e8f0b1216fc253d4544d2cbe88042db3ee59e47cb44683f03& https://cdn.discordapp.com/attachments/1034588634764025897/1174138041166729226/image.png?ex=660362c3&is=65f0edc3&hm=48fcb720f7f5c07f6074cbe1467859295b46112ef1228c3bd8f0b81e7af99180&",
  "ahora soy main skarner: https://cdn.discordapp.com/attachments/1034588634764025897/1173446595463888916/image.png?ex=6600decd&is=65ee69cd&hm=0be5432dbbe5a0a63d4d9cb5b97f393e2c221cf9eff17d277c93ca39b32395bb&  ",
  "\nLos profesores: El uso de ChatGPT por los jóvenes los hace más vagos\nNuestro uso:\nhttps://cdn.discordapp.com/attachments/1034588634764025897/1166547356234305587/image.png?ex=660374e3&is=65f0ffe3&hm=1a348053e260d1a9e66afcfd24a36c4837295ec895971e6ef2fe76e547568dfa&",
  "\nLa alfombrilla del raton de Kitty:\nhttps://cdn.discordapp.com/attachments/1034588634764025897/1183270688430243850/image.png?ex=65ffb234&is=65ed3d34&hm=d582cf684c3444818af09c1ac324060661638a7d0e4b023f92dbb9cc640a80a6&",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1209651712726409236/que_no_comoooh.mp4?ex=66036272&is=65f0ed72&hm=690e7bd40f3cd3dc0c2c618af8d897ec44535e6889917c6c27656fd4591e784b&",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1206069436121882635/Y_sera_VERDAD.mp4?ex=65ff94b1&is=65ed1fb1&hm=439e8894fddd96d68d9903315da02b882c2a18627062411fe293a7b67f76d4c4&",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1206069437053145138/Me_quiero_RENDIR_YAAAAAAAAAAAAAAAAA.mp4?ex=65ff94b1&is=65ed1fb1&hm=9608d99ac17b823ef47e21ad41e483a5eacf00ccc7818008564170a938761130&",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1206069438223220756/Y_SERA_VERDAD_QUE_ME_VA_A_MATSDFAIUSGFUYASDFYASUDIFFSAF.mp4?ex=65ff94b1&is=65ed1fb1&hm=ecc3ba55229853db33edc33a689f794e08fdfd5817c706e600000a7896eb3f28&",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1206069533291315241/Voy_0-5.mp4?ex=65ff94c8&is=65ed1fc8&hm=8c22073306e46b2761d112bd8d8d263c64d7af30642391d03ddf487d8c148c90&",
  "Yo con biyin no me baño.",
  "Ese negro me trae recuerdos...",
  "\nBiyin hablando sobre su tatuaje de Jagger\nKitty: Me representa porque tengo los mismos cuernos.",
  "\nNel: Que te pasa hoy con los Pakistanis que te burlas de ellos con Kevyn?\nKitty: Es que me hacen gracia KEKW",
  "\nKitty: NO ENTIENDO EL LORE\nNel: ¿Qué lore?\nKitty: ESPÉRATE QUE ESTOY PEGANDO",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
]


/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/
module.exports = {
    name: "kitty",
    description: "Kitty en ranked",
    execute: async function (interaction) {
      await interaction.reply("<@654388064998653958> " + frases[Math.floor(Math.random() * frases.length)]
      ); // Responder con un mensaje al usuario.
  },
};
