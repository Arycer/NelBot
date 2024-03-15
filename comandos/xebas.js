const frases = [
  "Yo de mayor quiero ser un pezon 😎",
  "Eso es como todo al final. Las opiniones son como el culo, todos tenemos uno.",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1153828977278980126/XEBASLL.PNG?ex=66035479&is=65f0df79&hm=95b5353d2fc31f548e5c06dc03bac646b936e614cf2c68a0bd0e102f9afeedfc&",
  "SSHHHHIIIIIIEEEEEMPREEEEE",
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
  "",
  "",

]


/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/
module.exports = {
    name: "xebas",
    description: "El abuelo mas cotizado de la historia",
    execute: async function (interaction) {
      await interaction.reply("<@311609138918719489> " + frases[Math.floor(Math.random() * frases.length)]
      ); // Responder con un mensaje al usuario.
  },
};
