const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const randomPat = () => {
    const pats = [
        "https://i.gifer.com/2QEa.gif",
        "https://media1.tenor.com/m/J7eGDvGeP9IAAAAC/enage-kiss-anime-hug.gif",
        "https://i.pinimg.com/originals/b6/2f/04/b62f047f8ed11b832cb6c0d8ec30687b.gif",
        "https://gifdb.com/images/high/anime-hug-date-a-live-z8yqrk7wlwo3v8ql.gif",
        "https://i.pinimg.com/originals/43/fc/e3/43fce3d874179afb2d9d74a7402dcff4.gif",
        "https://i.pinimg.com/originals/4d/89/d7/4d89d7f963b41a416ec8a55230dab31b.gif",
        "https://33.media.tumblr.com/680b69563aceba3df48b4483d007bce3/tumblr_mxre7hEX4h1sc1kfto1_500.gif",
        "https://i.gifer.com/27tM.gif",
        "https://gifdb.com/images/high/cute-anime-hug-gnxliwhxm4xua8l0.gif",
        "https://i.imgur.com/IAxUnda.gif",
        "https://i.gifer.com/B7bp.gif",
        "https://37.media.tumblr.com/f2a878657add13aa09a5e089378ec43d/tumblr_n5uovjOi931tp7433o1_500.gif",
        "https://i.gifer.com/Wjrj.gif",
        "https://i0.wp.com/drunkenanimeblog.com/wp-content/uploads/2018/03/tenor.gif?resize=500%2C281&ssl=1",
        "https://usagif.com/wp-content/uploads/gif/anime-hug-38.gif",
        "https://78.media.tumblr.com/88b9b721e47c33272a3cafd0fdb916b5/tumblr_oqkfe3BbYM1vb10byo1_500.gif",
        "https://gifdb.com/images/high/anime-hug-kin-iro-mosaic-pqmb9zeds4ikw3l0.gif",
        "https://aniyuki.com/wp-content/uploads/2022/06/anime-hugs-aniyuki-13.gif",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hug')
        .setDescription('Envía una imagen al canal')
        .addUserOption(option =>
            option.setName('usuario')
                .setDescription('Usuario al que quieres abrazar')
                .setRequired(true)
            ),

    execute: async function (interaction) {
        var usuario = interaction.user;
        var usuarioMencionado = interaction.options.getUser('usuario');

        var objetoUsuario = interaction.client.database.get(usuario.id);
        if (!objetoUsuario) objetoUsuario = interaction.client.database.create(usuario.id, {
            globalName: usuario.globalName,
            abrazos: {}
        });
        if (!objetoUsuario.abrazos) objetoUsuario.abrazos = {};

        objetoUsuario.abrazos[usuarioMencionado.id] = objetoUsuario.abrazos[usuarioMencionado.id] ? objetoUsuario.abrazos[usuarioMencionado.id] + 1 : 1;
        objetoUsuario.save();

        const embed = new EmbedBuilder()
            .setTitle(`**${usuario.globalName}** ha abrazado a **${usuarioMencionado.globalName}**`)
            .setDescription(`${usuario.globalName} le ha dado ${objetoUsuario.abrazos[usuarioMencionado.id]} abrazos a ${usuarioMencionado.globalName}`)
            .setImage(randomPat())
            .setColor(0xffb7c5);

        await interaction.reply({ embeds: [embed] })
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };
  