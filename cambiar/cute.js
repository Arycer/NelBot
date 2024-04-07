const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const randomPat = () => {
    const pats = [
        "https://i.pinimg.com/originals/a6/a7/b2/a6a7b22f0204e0bd47ac1be00698395f.gif",
        "https://gifdb.com/images/high/cute-anime-girl-noela-nya-3jd80r3o05097vdm.gif",
        "https://i.pinimg.com/originals/6c/ba/ed/6cbaedb88e5a0b80a0661755166d04c2.gif",
        "https://i.gifer.com/origin/21/211a3e06d26f3e373f98c3baf83bf28e.gif",
        "https://animegifwallpaper.com/wp-content/uploads/2023/08/beautiful-anime-girls-gif.gif",
        "https://media.tenor.com/ZnCUUm7cU-8AAAAC/cute-anime.gif",
        "https://i.gifer.com/3RwI.gif",
        "https://gifdb.com/images/high/cute-anime-menhera-leaning-close-a2ub9rqc2wr0wi1n.gif",
        "https://gifsec.com/wp-content/uploads/2022/10/cute-anime-girl-1.gif",
        "https://i.imgur.com/NxjWrSr.gif",
        "https://i.pinimg.com/originals/48/01/bc/4801bc9432e17d50141c691e6b2d7d07.gif",
        "https://gifdb.com/images/high/cute-anime-cat-girl-dancing-qb6oo9cgljjixtqf.gif",
        "https://pa1.aminoapps.com/6192/938e22852c029c79b46aa7e5d0e59c7b424cec9a_hq.gif",
        "https://i.pinimg.com/originals/da/96/ff/da96ff27648a6d6a8193c00cc3babb90.gif",
        "https://animesher.com/orig/1/186/1864/18648/animesher.com_gif-anime-cute-anime-girl-1864801.gif",
        "https://animesher.com/orig/1/111/1113/11135/animesher.com_cute-anime-gif-1113529.gif",
        "https://33.media.tumblr.com/d813372dac548c11f9e07250bfd73bc5/tumblr_navspiIH3I1tk3dxfo1_500.gif",
        "https://media1.tenor.com/m/5xf3CcDWMe0AAAAC/miku-nakano-cute.gif",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    name: 'cute',
    description: 'Envía una imagen al canal',
    execute: async function (interaction) {
        await interaction.reply(randomPat())
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };