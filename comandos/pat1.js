const randomPat = () => {
    const pats = [
        "https://media1.tenor.com/m/aZFqg65KvssAAAAC/pat-anime.gif",
        "https://i.pinimg.com/originals/4c/03/bb/4c03bbe17bc0825e064d049c5f8262f3.gif",
        "https://media1.tenor.com/m/Mjyd8s7XLkYAAAAd/neko-pat.gif",
        "https://media1.tenor.com/m/mjzPtcvwO2cAAAAC/pat-head-good-job.gif",
        "https://i.pinimg.com/originals/61/51/c4/6151c42c94df654b1c7de2fdebaa6bd1.gif",
        "https://media.tenor.com/Dbg-7wAaiJwAAAAM/aharen-aharen-san.gif",

    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    name: 'pat',
    description: 'Envía una imagen al canal',
    execute: async function (interaction) {
        await interaction.reply(randomPat())
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };