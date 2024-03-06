const randomPat = () => {
    const pats = [
        "https://i.pinimg.com/originals/2a/3a/02/2a3a020417deca849d7cb6218edf75fa.gif",
        "https://i.pinimg.com/originals/e3/50/57/e35057f93cfcb984b003ff157b6c0f58.gif",
        "https://i.pinimg.com/originals/a3/43/3d/a3433d093be4009085f7f17b1c091bfe.gif",
        "https://i.pinimg.com/originals/cb/fd/2a/cbfd2a06c6d350e19a0c173dec8dccde.gif",
        "https://media1.tenor.com/m/uT9BWeRBJwYAAAAC/blushing-anime-girl.gif",
        "https://i.gifer.com/755P.gif",
        "https://gifdb.com/images/high/blushing-anime-384-x-498-gif-jjh1w4vwbnocryp5.gif",
        "https://iili.io/b5a3b9.gif",
        "https://gifdb.com/images/high/blushing-embarrassed-anime-girl-6iz14cozdwpquus3.gif",
        "https://i.pinimg.com/originals/3c/e5/d6/3ce5d6af434f62cc185590e8f84f4d53.gif",
        "https://i.pinimg.com/originals/07/63/f5/0763f5fa6e7945b67de3e527da893cab.gif",
        "https://i.gifer.com/3IgD.gif",
        "https://66.media.tumblr.com/01d11c6bcf340db8bc307f1beeb2f8fb/tumblr_ogsqu35lLv1vemg2qo1_500.gif",
        "https://pa1.aminoapps.com/6567/c89f28c8154d1f098756d33ddac02f528e71b215_hq.gif",
        "https://i.pinimg.com/originals/84/30/75/84307582253a96e4552d20e3ecef3a33.gif",
        "https://i.gifer.com/Azxk.gif",
        "https://i.pinimg.com/originals/8e/a6/a7/8ea6a720f2ebf4aee663f92d9395b864.gif",
        "https://gifdb.com/images/high/blushing-anime-498-x-498-gif-qxv3taom0abcdnet.gif",
        "https://64.media.tumblr.com/c6438e6850ff7e55e3a2457a76bc7058/tumblr_pidiulFVlq1tlyjpto1_540.gif",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykRUl4syVURHS2bjjQfQS4Is2psqftfWF0A&usqp=CAU",
        "https://animemotivation.com/wp-content/uploads/2020/09/Kosaki-Onodera-blush-nisekoi-gif.gif",
        "https://usagif.com/wp-content/uploads/gif/blushing-91.gif",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    name: 'blush',
    description: 'Envía una imagen al canal',
    execute: async function (interaction) {
        await interaction.reply(randomPat())
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };