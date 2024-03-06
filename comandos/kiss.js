const randomPat = () => {
    const pats = [
        "https://media1.tenor.com/m/IAP6odUutZMAAAAC/kiss.gif",
        "https://i.pinimg.com/originals/1a/b1/b7/1ab1b7c12ccb4cb3d1002b1f7bc40903.gif",
        "https://i.pinimg.com/originals/10/5a/7a/105a7ad7edbe74e5ca834348025cc650.gif",
        "https://i.gifer.com/C3GK.gif",
        "https://i.pinimg.com/originals/41/8b/d1/418bd15719e95c5b5c03e847296cb17a.gif",
        "https://gifdb.com/images/high/anime-kissing-498-x-280-gif-op3h5wkpm21z2dil.gif",
        "https://wethehunted.files.wordpress.com/2015/11/katanagatari-kiss.gif",
        "https://37.media.tumblr.com/b12bd032e97037081108f993aadcae62/tumblr_mwo343m7tK1sv72vno1_500.gif",
        "https://gifdb.com/images/high/shy-anime-kiss-sakura-trick-mfs9xkkiznvxc46a.gif",
        "https://i.makeagif.com/media/12-24-2021/-zQ_G9.gif",
        "https://gifdb.com/images/high/ayano-sugiura-anime-kiss-scene-zvx6dwc8h29t2hnw.gif",
        "https://i.pinimg.com/originals/8a/e6/59/8ae65928d806391c4fa5b8cbbb14e3d5.gif",
        "https://d31xsmoz1lk3y3.cloudfront.net/games/imgur/eisk88U.gif",
        "https://www.icegif.com/wp-content/uploads/anime-kiss-icegif-1.gif",
        "https://i0.wp.com/loveisaname.com/wp-content/uploads/2016/09/46.gif?resize=500%2C281",
        "https://pa1.aminoapps.com/6248/cae38662b21747d6247776d35b8d2db50944ef08_hq.gif",
        "https://i1.wp.com/loveisaname.com/wp-content/uploads/2016/09/23.gif",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    name: 'kiss',
    description: 'Envía una imagen al canal',
    execute: async function (interaction) {
        await interaction.reply(randomPat())
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };