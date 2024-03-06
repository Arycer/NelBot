const randomPat = () => {
    const pats = [
        "https://miro.medium.com/v2/resize:fit:640/1*r8vV_cJAqP5bQTCg5t0sfg.gif",
        "https://media.tenor.com/Wr-tHDA9KtoAAAAM/miriam-pelea.gif",
        "https://media.tenor.com/dEWK-W4HvewAAAAM/evo-silletazo.gif",
        "https://i.gifer.com/SOzw.gif",
        "https://i.imgur.com/PlfHL.gif",
        "https://pa1.aminoapps.com/6393/d7580c9a3388fd814a922818fb9abad25d72a962_hq.gif",
        "https://2img.net/h/i92.photobucket.com/albums/l31/somekindabrady/Shot.gif?t=1253716664",
        "https://s3.superluchas.com/2016/12/TLC-12.gif?",
        "https://pa1.narvii.com/6313/d278c21758a19ae6cc94c25ffe48258f9820d0df_hq.gif",
        "https://i.makeagif.com/media/4-13-2015/3hBBGI.gif",
        "https://2img.net/h/i214.photobucket.com/albums/cc57/goldysilver/sillazo-1.gif",
        "https://s3.superluchas.com/2016/09/Raw-01-3.gif",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    name: 'sillazo',
    description: 'Envía una imagen al canal',
    execute: async function (interaction) {
        await interaction.reply(randomPat())
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };