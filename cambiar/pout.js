const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const randomPat = () => {
    const pats = [
        "https://i.pinimg.com/originals/27/16/68/271668b1037633d7f7ae63dc1a1c29f2.gif",
        "https://i.pinimg.com/originals/c9/c9/ff/c9c9ff2eed3dff5c3b9f7c0c033704da.gif",
        "https://media.tenor.com/fRgkwiu8K_kAAAAj/senku.gif",
        "https://i.pinimg.com/originals/a9/a1/ee/a9a1ee151d114920f6914bd507f8b3c5.gif",
        "https://i.pinimg.com/originals/4e/f6/be/4ef6beb5c6642c54edcea6dc1217b7e0.gif",
        "https://gifdb.com/images/high/cute-anime-yuudachi-pout-y6p8advne3hftwnu.gif",
        "https://i.gifer.com/Jyg.gif",
        "https://i.gifer.com/BM5J.gif",
        "https://i.gifer.com/Dj1.gif",
        "https://media1.tenor.com/m/qDHpRcgOe7gAAAAC/anime-pouting.gif",
        "https://gifdb.com/images/high/cute-anime-homura-grumpy-pout-9f127rti521zhkis.gif",
        "https://38.media.tumblr.com/4018257a1a21e999cd1fdbcd67f38a1d/tumblr_nham95OVWg1rgfa0po1_500.gif",
        "https://4.bp.blogspot.com/-_W-lDWNfR6E/WcHPnBjG52I/AAAAAAAA77E/hFpx-2PbhNMhK-zyu3rSQEulslw6PBhdgCKgBGAs/s1600/Omake%2BGif%2BAnime%2B-%2BNew%2BGame%2521%2521%2B-%2BEpisode%2B11%2B-%2BNene%2BBig%2BPout.gif",
        "https://38.media.tumblr.com/2498f33097fa39986e96c07092d5283b/tumblr_n98ecedCpw1rks0ueo1_500.gif",
        "https://gifdb.com/images/high/anime-girl-pouting-hmph-tkud7tmv7bj8qutf.gif",
        "https://static.myfigurecollection.net/upload/pictures/2021/08/01/2803346.gif",
        "https://c.tenor.com/3EgO4ozQzp4AAAAC/anime-raphtalia.gif",
        "https://gifdb.com/images/high/funny-anime-pout-3p99vm9tdr2s8sxk.gif",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    name: 'pout',
    description: 'Envía una imagen al canal',
    execute: async function (interaction) {
        await interaction.reply(randomPat())
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };