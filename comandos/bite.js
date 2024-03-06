const randomPat = () => {
    const pats = [
        "https://media1.tenor.com/m/fjyhsh9lKEAAAAAC/bite-anime.gif",
        "https://i.pinimg.com/originals/4c/6a/ca/4c6aca5f44b08a8a0e71d9e01dc1b52b.gif",
        "https://i.gifer.com/TuLu.gif",
        "https://i.gifer.com/L1lz.gif",
        "https://i.pinimg.com/originals/27/bc/6a/27bc6a2bf2f4731d62528af55f96bbef.gif",
        "https://1.bp.blogspot.com/-WVysG3ES34o/WHQYX2VHIvI/AAAAAAAAtHE/Bt773uJfdnkRXUZL1DaVAbSkegdU2T-rgCPcB/s1600/Omake%2BGif%2BAnime%2B-%2BDemi-chan%2Bwa%2BKataritai%2B-%2BEpisode%2B1%2B-%2BHikari%2BVampire%2BBites%2BYuki%2BSnow%2BWoman.gif",
        "https://gifdb.com/images/high/anime-hickey-kiss-mark-mn1gmhqtxoa6yp3a.gif",
        "https://64.media.tumblr.com/f8e7c81e268388359d6f89da2fed0641/tumblr_nwdv3zsfoD1txbmwvo1_500.gif",
        "https://pa1.aminoapps.com/6045/a9bb6d864ebe7e01ed647b78fc652f15116716c4_hq.gif",
        "https://i.pinimg.com/originals/c0/b4/a9/c0b4a94993a08d1df826e27e55dd2fb0.gif",
        "https://i.pinimg.com/originals/52/1d/b6/521db6745ca5cd5d094a3c01a9a674cf.gif",
        "https://pa1.aminoapps.com/6330/166b0eee3ccf1c9b1e2c9fd27f253988d940d27e_hq.gif",
        "https://i0.wp.com/c.tenor.com/36qdN7w7I28AAAAC/anime-couple-anime-neck.gif",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    name: 'bite',
    description: 'Envía una imagen al canal',
    execute: async function (interaction) {
        await interaction.reply(randomPat())
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };