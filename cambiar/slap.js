const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const randomPat = () => {
    const pats = [
        "https://media1.tenor.com/m/Ws6Dm1ZW_vMAAAAC/girl-slap.gif",
        "https://i.pinimg.com/originals/71/a5/1c/71a51cd5b7a3e372522b5011bdf40102.gif",
        "https://i.pinimg.com/originals/b6/d8/a8/b6d8a83eb652a30b95e87cf96a21e007.gif",
        "https://gifdb.com/images/high/yuruyuri-akari-kyoko-anime-slap-fcacgc0edqhci6eh.gif",
        "https://media1.tenor.com/m/5eI0koENMAAAAAAC/anime-hit.gif",
        "https://i.pinimg.com/originals/fb/17/a2/fb17a25b86d80e55ceb5153f08e79385.gif",
        "https://i.gifer.com/5m62.gif",
        "https://gifdb.com/images/high/anime-fight-funny-slap-gintama-aotc4er3fjn8pi2l.gif",
        "https://i.pinimg.com/originals/d1/49/69/d14969a21a96ec46f61770c50fccf24f.gif",
        "https://i.kym-cdn.com/photos/images/newsfeed/000/940/326/086.gif",
        "https://i.gifer.com/DkE.gif",
        "https://64.media.tumblr.com/b05c60b90649f9f9f173ac288d41ac53/7ea633a1e0f4c2c6-4a/s1280x1920/f46660d8f914b28076e7bd44bf2247b6ee38afb9.gif",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/390/712/289.gif",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    name: 'slap',
    description: 'Envía una imagen al canal',
    execute: async function (interaction) {
        await interaction.reply(randomPat())
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };