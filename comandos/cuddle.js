const randomPat = () => {
    const pats = [
        "https://i.pinimg.com/originals/d8/7c/5c/d87c5cdd0a68caf2b6feeec0f7da7315.gif",
        "https://media1.tenor.com/m/P54lVoy1FxkAAAAC/kuzu-no-honkai-hug.gif",
        "https://gifdb.com/images/high/cute-sleeping-anime-cuddle-0y4t23es1pzulfri.gif",
        "https://i.pinimg.com/originals/8f/8b/a3/8f8ba3baeecdf28f3e0fa7d4ce1a8586.gif",
        "https://gifdb.com/images/high/charming-anime-cuddle-lviox3vrl2snmiad.gif",
        "https://gifdb.com/images/high/smiling-girl-anime-cuddle-xvv81gp9u163xnhq.gif",
        "https://gifdb.com/images/high/animal-ears-boy-anime-cuddle-alfixpn3wj81ptsu.gif",
        "https://media1.tenor.com/m/moDYVLYRAkYAAAAC/hug-anime.gif",
        "https://media1.tenor.com/m/wZQ82apr3YMAAAAC/anime-cuddle.gif",
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
    name: 'cuddle',
    description: 'Envía una imagen al canal',
    execute: async function (interaction) {
        await interaction.reply(randomPat())
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };