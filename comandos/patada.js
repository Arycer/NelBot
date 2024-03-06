const randomPat = () => {
    const pats = [
        "https://i.pinimg.com/originals/b1/94/a9/b194a9ce557297165aafc3046a671744.gif",
        "https://i.pinimg.com/originals/a7/8d/54/a78d54cea15f59bdba220ba032881381.gif",
        "https://i.pinimg.com/originals/bd/1b/c4/bd1bc4e406bc8f591170bc6a56810476.gif",
        "https://i.gifer.com/OHNW.gif",
        "https://i.pinimg.com/originals/1c/31/50/1c31508f793d25a4fe8a5c71bd8e8dc9.gif",
        "https://24.media.tumblr.com/tumblr_md9xmbVfFL1r8tyjfo1_500.gif",
        "https://i.pinimg.com/originals/a9/b8/dd/a9b8ddc2928936c712a237b06aa1653a.gif",
        "https://static.wikia.nocookie.net/fairy-tail-fanfiction/images/c/c1/Patada_Ferrea_del_Dios_de_Arena.gif/revision/latest/thumbnail/width/360/height/360?cb=20160405195550&path-prefix=es",
        "https://pa1.aminoapps.com/5802/121d2e7b342e8472dc7cf228581085e8c6dcf23d_hq.gif",
        "https://i.pinimg.com/originals/a4/8e/6c/a48e6cb70a3822090500d42bc718c764.gif",
        "https://i.pinimg.com/originals/37/63/c6/3763c6bf76973174021a6b55aa77434a.gif",
        "https://i.gifer.com/C6OC.gif",
        "https://i.pinimg.com/originals/57/bb/f4/57bbf4219cfe3cdb8a476c7d8104dc3e.gif",
        "https://gifdb.com/images/high/anime-fight-flying-kick-o4ddmhew9wwdpp5w.gif",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    name: 'patada',
    description: 'Envía una imagen al canal',
    execute: async function (interaction) {
        await interaction.reply(randomPat())
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };