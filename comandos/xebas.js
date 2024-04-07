const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { data } = require('./txebas');

const frases = [
  "Yo de mayor quiero ser un pezon 😎",
  "Eso es como todo al final. Las opiniones son como el culo, todos tenemos uno.",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1153828977278980126/XEBASLL.PNG?ex=66035479&is=65f0df79&hm=95b5353d2fc31f548e5c06dc03bac646b936e614cf2c68a0bd0e102f9afeedfc&",
  "SSHHHHIIIIIIEEEEEMPREEEEE",
  "https://cdn.discordapp.com/attachments/1034588634764025897/1164362587035672617/canigo.PNG?ex=6604bca9&is=65f247a9&hm=7f2ad9fcb423417ea31955462f3bc23ced4678ef7d05750fac9dd3474eaa86ea&",
  "\nNel: txebas ¿ si pudieras ser un pez cual serias?\nTxebas: ... un pezon",
  "Mirar la foto de alguien y que te den ganas de cagar... - Txebas",
  "\nSara: Txebas\nTxebas: Yo\nSara: Un lol?¿\nTxebas: ¿Un piquito?\nSara: No Txebas, un lol\nTxebas: Un lol y un piquito",
  "\nhttps://cdn.discordapp.com/attachments/1034588634764025897/1225634058160177294/image.png?ex=6621d7aa&is=660f62aa&hm=d05c8538a2041989dd33cf020788b256be2680453f13769f3689fb3ffa8c3e60&",
  

]


/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/

module.exports = {
  data: new SlashCommandBuilder()
    .setName("txebas")
    .setDescription("El abuelo mas cotizado de la historia."),
  execute: async function (interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Frases del lore de Txebas")
      .setDescription(frases[Math.floor(Math.random() * frases.length)])
      .setColor("#ffb7c5")
      .setTimestamp();

    await interaction.reply({ embeds: [embed] }); // Responder con un mensaje al usuario.
},
};

