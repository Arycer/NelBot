const randomPat = () => {
    const pats = [
        "https://i.gifer.com/ZjWE.gif",
        "https://i.pinimg.com/originals/4e/72/fb/4e72fbb9fdef80c0cf4cc39ed74fc0b6.gif",
        "https://i.makeagif.com/media/6-10-2021/YrttX9.gif",
        "https://media.tenor.com/BaQOxEqcJ-EAAAAj/sad.gif",
        "https://media1.tenor.com/m/Ntknsrqp_psAAAAC/sad-anime.gif",
        "https://i.pinimg.com/originals/10/7d/4c/107d4cbd0aed89cb944ece09eb4c3df4.gif",
        "https://media.tenor.com/ESe9mqJlywkAAAAC/anime-girl.gif",
        "https://media.tenor.com/ZJxwKOdnqNIAAAAC/sad-anime.gif",
        "https://aniyuki.com/wp-content/uploads/2021/09/aniyuki-sad-anime-gif-71.gif",
        "https://i.pinimg.com/originals/03/7d/1b/037d1b8ff12e45a513dc43bb32c36fbd.gif",
        "https://pa1.aminoapps.com/6189/1b81fe9864601161f1adbf53570fa5914b3bee60_hq.gif",
        "https://i.imgur.com/zklf5zj.gif",
        "https://gifsec.com/wp-content/uploads/2022/10/anime-sad-gif-28.gif",
        "https://media3.giphy.com/media/BSxFhxneZPCvK/giphy.gif?cid=6c09b952mbjs1h96ph5ttx685xmi5ubtw1uqne73xn7oo5o5&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
        "https://i.imgur.com/DOoa6fh.gif",
        "https://i.pinimg.com/originals/eb/b6/38/ebb638dd7506603e8cc4806d5bc8b0bc.gif",
        "https://gifdb.com/images/high/sad-kyou-fujibayashi-anime-girl-4tyepnbmuattfddb.gif",
        "https://animeeverything.online/wp-content/uploads/2022/01/ancient-magus-bride.gif",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    name: 'sad',
    description: 'Envía una imagen al canal',
    execute: async function (interaction) {
        await interaction.reply(randomPat())
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };