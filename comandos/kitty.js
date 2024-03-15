const frases = [
  "Loco vamos 0/5, 0/5, 2/3, tu de verdad te crees que yo doy algo de oro?, TU DE VERDAD, SE TE PASA EN LA CABEZA?? QUE DOY ORO!!?? 🤬😡🤬",
  "Pero tu te escuchas cuando hablo brother?",
  "La alfombrilla del raton de Kitty: https://cdn.discordapp.com/attachments/1034588634764025897/1183270688430243850/image.png?ex=65ffb234&is=65ed3d34&hm=d582cf684c3444818af09c1ac324060661638a7d0e4b023f92dbb9cc640a80a6& ",
  "Mejor por la boca que por el culo",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1174138041166729226/image.png?ex=660362c3&is=65f0edc3&hm=48fcb720f7f5c07f6074cbe1467859295b46112ef1228c3bd8f0b81e7af99180&",
  "ahora soy main skarner: https://cdn.discordapp.com/attachments/1034588634764025897/1173446595463888916/image.png?ex=6600decd&is=65ee69cd&hm=0be5432dbbe5a0a63d4d9cb5b97f393e2c221cf9eff17d277c93ca39b32395bb&  ",
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
