const randomPat = () => {
    const pats = [
        "https://i.gifer.com/1Ky5.gif",
        "",
        "",
        "",
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
    name: 'punch',
    description: 'Envía una imagen al canal',
    execute: async function (interaction) {
        await interaction.reply(randomPat())
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };