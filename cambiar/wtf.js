const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const randomPat = () => {
    const pats = [
        "https://www.icegif.com/wp-content/uploads/icegif-7034.gif",
        "https://i.pinimg.com/originals/92/65/74/9265747cd10ebb8146c3b890fed00e11.gif",
        "https://media.tenor.com/5YALM3_mdbAAAAAi/wtf-anime.gif",
        "https://64.media.tumblr.com/a4913666cfa182eb2f2fe09828cbb58c/tumblr_o6mdhdH4E81vrrul2o1_250.gif",
        "https://i.kym-cdn.com/photos/images/original/001/228/779/528.gif",
        "https://i0.wp.com/blerdyotome.com/wp-content/uploads/2016/07/shocked.gif?fit=500%2C281&ssl=1",
        "https://media.tumblr.com/9004b8230f8942ebcf6d7ec98a88455a/tumblr_inline_mp6tf9lLXi1qz4rgp.gif",
        "https://media1.tenor.com/m/9pCyichwKnAAAAAC/anime-wtf.gif",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    name: 'wtf',
    description: 'Envía una imagen al canal',
    execute: async function (interaction) {
        await interaction.reply(randomPat())
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };