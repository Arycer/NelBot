const randomPat = () => {
    const pats = [
        "https://www.icegif.com/wp-content/uploads/icegif-7034.gif",
        "https://i.pinimg.com/originals/92/65/74/9265747cd10ebb8146c3b890fed00e11.gif",
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
        "",
        "",
        "",
        "",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    name: 'wtf',
    description: 'Envía una imagen al canal',
    execute: async function (interaction) {
        await interaction.reply(randomPat())
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };