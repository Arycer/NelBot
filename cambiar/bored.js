const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const randomPat = () => {
    const pats = [
        "https://i.pinimg.com/originals/4b/84/b1/4b84b1b5b40033e0a3a0bb2e22b7230d.gif",
        "https://i.pinimg.com/originals/cd/2c/c6/cd2cc65ff07f62533821f952e3542bd8.gif",
        "https://i.gifer.com/OnV.gif",
        "https://gifdb.com/images/high/anime-boy-bored-playing-25977uagnvgirk1m.gif",
        "https://i.pinimg.com/originals/7c/1a/ee/7c1aee1e68fedc6892316bc74e74b10d.gif",
        "https://i.imgur.com/E6mGZ5r.gif",
        "https://i.gifer.com/PfXd.gif",
        "https://i.pinimg.com/originals/38/f8/9e/38f89ef646d26448add219ab5fefb960.gif",
        "https://gifdb.com/images/high/sitting-bored-anime-girl-b4ya2pnrdv38w7qs.gif",
        "https://i.gifer.com/3l7y.gif",
        "https://i.pinimg.com/originals/e3/e7/8d/e3e78d5f210ee4815892abbaf267b896.gif",
        "https://64.media.tumblr.com/c4f0164ab3b4cb3e2847d91a1f9df9c7/tumblr_ornynhdu8X1wn2b96o2_r1_400.gif",
        "https://i.imgur.com/iJAcljj.gif",
        "https://www.icegif.com/wp-content/uploads/bored-sailor-moon-icegif.gif",
        "https://gifdb.com/images/high/bored-anime-girl-studying-379als95wevzslnu.gif",
        "https://pa1.aminoapps.com/8259/7fc2c2b2f763d47c83d310f56124116770a66b86r1-498-368_hq.gif",
        "https://i.imgur.com/AjhIES1.gif",
        "https://i.gifer.com/JHyT.gif",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    name: 'bored',
    description: 'Envía una imagen al canal',
    execute: async function (interaction) {
        await interaction.reply(randomPat())
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };