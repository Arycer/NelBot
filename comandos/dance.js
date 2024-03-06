const randomPat = () => {
    const pats = [
        "https://i.pinimg.com/originals/97/2d/aa/972daa47f0ce9cd21f79af88195b4c07.gif",
        "https://gifdb.com/images/high/chika-fujiwara-anime-dance-d7qcmemf2u1qb78f.gif",
        "https://animegifwallpaper.com/wp-content/uploads/2023/08/Anime-About-Dance-GIF.gif",
        "https://i.pinimg.com/originals/51/06/80/51068067b72188f184b84bba002cd769.gif",
        "https://i.gifer.com/8UYb.gif",
        "https://gifdb.com/images/high/anime-dancing-eiko-paripi-koumei-wt4i4141lcyp8y2w.gif",
        "https://i.imgur.com/elbrs7G.gif",
        "https://media1.giphy.com/media/W6dHvprT7oks6BpX5R/200w.gif?cid=6c09b952rej8as3wxl7s0d32sgfyl05dniygg0zvzseozwsk&ep=v1_gifs_search&rid=200w.gif&ct=g",
        "https://64.media.tumblr.com/f686dc36c3e402f4679e17d1565892bf/tumblr_ow13r7AMR21wt7ek9o1_640.gifv",
        "https://i.pinimg.com/originals/97/2d/aa/972daa47f0ce9cd21f79af88195b4c07.gif",
        "https://64.media.tumblr.com/242a47f9b1046defb2ea60e692c3300d/tumblr_noh65r0JXd1tv86h0o1_500.gif",
        "https://i.makeagif.com/media/10-14-2022/W1xnJJ.gif",
        "https://www.icegif.com/wp-content/uploads/2023/07/icegif-86.gif",
        "https://usagif.com/wp-content/uploads/gify/48-anime-dance-waltz-usagif.gif",
        "https://j.gifs.com/KdJZ2Q.gif",
        "https://j.gifs.com/yX6WGz.gif",
        "https://i.redd.it/d5jtphmm52931.gif",
        "https://media.tenor.com/13M7DM7nbGQAAAAM/anime-dance.gif",
        "https://img1.picmix.com/output/stamp/normal/6/3/8/5/1815836_5d1dc.gif",
        "https://gifsec.com/wp-content/uploads/2022/10/anime-dance-gif-21.gif",
        "https://i.pinimg.com/originals/b9/ba/c6/b9bac6f190cabf3574165538e277c33d.gif",
        "https://i.imgur.com/YETaNDm.gif",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/263/922/455.gif",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    name: 'dance',
    description: 'Envía una imagen al canal',
    execute: async function (interaction) {
        await interaction.reply(randomPat())
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };