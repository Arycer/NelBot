const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const randomPat = () => {
    const pats = [
        "https://gifdb.com/images/high/sad-anime-a-silent-voice-e0rz35qd5lqdcnqm.gif",
        "https://www.icegif.com/wp-content/uploads/sad-anime-icegif-1.gif",
        "https://www.icegif.com/wp-content/uploads/sad-anime-icegif.gif",
        "https://i.gifer.com/3kUR.gif",
        "https://64.media.tumblr.com/cfb41f2084d545a802cb5facbe8e6d01/ed719d23d760d49f-04/s540x810/872a5dc816430f327c9c14fa74a1cf5ede19f43b.gifv",
        "https://68.media.tumblr.com/0e42f221a783ae10e79fd8c710b59898/tumblr_o1usx7DyI91s7fey2o1_500.gif",
        "https://i.gifer.com/Zgp9.gif",
        "https://i.pinimg.com/originals/0c/89/df/0c89df9ccf9372d690c48da751842f0b.gif",
        "https://gifdb.com/images/high/sad-anime-boy-sword-8urm5v5nlro1kff4.gif",
        "https://i.gifer.com/3B6X.gif",
        "https://i.imgur.com/OLSFcu5.gif",
        "https://favim.com/pd/s11/orig/8/886/8869/88698/gif-sad-anime-girl-Favim.com-8869854.gif",
        "https://i.gifer.com/Yf7N.gif",
        "https://static.wikia.nocookie.net/2ddb379d-883e-4664-87f0-0c4a0d3f2d92",
        "https://media.tenor.com/0s9wVIk5_fMAAAAC/astheticanime-subwayanime.gif",
        "https://gifdb.com/images/high/anime-crying-reina-kousaka-jcyrk30xco3xqnvr.gif",
        "https://media1.tenor.com/m/u4T7KV53gKEAAAAC/sad-anime.gif",
        "https://64.media.tumblr.com/6057960b9d7c622a59966dc5335a70f8/tumblr_omewzrquIJ1v8tshbo1_540.gif",
        "https://gifdb.com/images/high/anime-sad-crying-tears-gq1cd7ooettkytan.gif",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    name: 'cry',
    description: 'Envía una imagen al canal',
    execute: async function (interaction) {
        await interaction.reply(randomPat())
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };