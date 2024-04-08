const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

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
        "https://i.gifer.com/Jr4.gif",
        "https://i.pinimg.com/originals/0c/d5/c4/0cd5c43b6089438c04fc3304d91f4180.gif",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kiss')
        .setDescription('Envía una imagen al canal')
        .addUserOption(option =>
            option.setName('usuario')
                .setDescription('Usuario al quien quieres besar')
                .setRequired(true)
            ),

    execute: async function (interaction) {
        var usuario = interaction.user;
        var usuarioMencionado = interaction.options.getUser('usuario');

        var objetoUsuario = interaction.client.database.get(usuario.id);
        if (!objetoUsuario) objetoUsuario = interaction.client.database.create(usuario.id, {
            globalName: usuario.globalName,
            besos: {}
        });
        if (!objetoUsuario.besos) objetoUsuario.besos = {};

        objetoUsuario.besos[usuarioMencionado.id] = objetoUsuario.besos[usuarioMencionado.id] ? objetoUsuario.besos[usuarioMencionado.id] + 1 : 1;
        objetoUsuario.save();

        const embed = new EmbedBuilder()
            .setTitle(`**${usuario.globalName}** ha besado a **${usuarioMencionado.globalName}**`)
            .setDescription(`${usuario.globalName} le ha dado ${objetoUsuario.besos[usuarioMencionado.id]} besos a ${usuarioMencionado.globalName}`)
            .setImage(randomPat())
            .setColor(0xffb7c5);

        await interaction.reply({ embeds: [embed] })
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };