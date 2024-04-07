const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const randomPat = () => {
    const pats = [
        "https://i.pinimg.com/originals/7b/c6/65/7bc665fb8d56327c61286166b1490252.gif",
        "https://i.pinimg.com/originals/4b/05/56/4b0556bef5c1eb1b68fd048c5858ed77.gif",
        "https://media1.tenor.com/m/kiw3AxGnfSgAAAAC/anime-smile-anime-cute-boy.gif",
        "https://i.pinimg.com/originals/98/c3/bc/98c3bc8cdab978becda70bb5b567e3d7.gif",
        "https://gifdb.com/images/high/happy-anime-taiga-aisaka-37mn59oq061m7g63.gif",
        "https://i.pinimg.com/originals/67/09/a0/6709a038c2f3a1992efdc20abc8290a8.gif",
        "https://animegifwallpaper.com/wp-content/uploads/2023/08/Anime-Smile-GIF-boy.gif",
        "https://media3.giphy.com/media/cJ5oaMoekxnipcWSPP/giphy.gif?cid=6c09b95209cv4agq3lmaor99mhojmzdg6l0afis2rm8tl873&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
        "https://i.pinimg.com/originals/6b/fc/bb/6bfcbb252a151933a16fe101c77cc9fa.gif",
        "https://i.waifu.pics/vgmgptj.gif",
        "https://animegifwallpaper.com/wp-content/uploads/2023/08/Anime-Smile-Boy-GIF.gif",
        "https://media3.giphy.com/media/AU9st1hWuzMwU/giphy.gif",
        "https://64.media.tumblr.com/8d67fd3c95f208b46820bce69052bad8/tumblr_os3ptyjDwI1wn2b96o1_r1_500.gif",
        "https://i.waifu.pics/7lhMNMV.gif",
        "https://media.moddb.com/images/groups/1/1/84/T_A_K_n_R_1.gif",
        "https://moyatorium.files.wordpress.com/2020/07/satisfied-1.gif",
        "https://i.pinimg.com/originals/4f/8c/3b/4f8c3b6db8eed790852bb4ccb96cc2e6.gif",
        "https://animesher.com/orig/0/99/997/9970/animesher.com_anime-girl-happy-anime-gif-anime-girl-happy-gif-997041.gif",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    name: 'happy',
    description: 'Envía una imagen al canal',
    execute: async function (interaction) {
        await interaction.reply(randomPat())
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };