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
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
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