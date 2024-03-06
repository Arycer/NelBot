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
    name: 'cute',
    description: 'Envía una imagen al canal',
    execute: async function (interaction) {
        await interaction.reply(randomPat())
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };