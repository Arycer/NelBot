const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const randomPat = () => {
    const pats = [
        "https://i.pinimg.com/originals/32/d4/f0/32d4f0642ebb373e3eb072b2b91e6064.gif",
        "https://media1.tenor.com/m/7T1cuiOtJvQAAAAC/anime-kiss.gif",
        "https://gifdb.com/images/high/nanatsu-no-taizai-diane-anime-kiss-n8fqcpvqh0vlsq5g.gif",
        "https://i.pinimg.com/originals/13/9d/ab/139dab5977df4f51acde60af9e5a1f69.gif",
        "https://i.pinimg.com/originals/55/8f/63/558f63303a303abfdddaa71dc7b3d6ae.gif",
        "https://64.media.tumblr.com/892604ef2e7a9e3c0ff80ef5178e9622/tumblr_inline_ose4kzqhUj1v1tpmb_500.gif",
        "https://usagif.com/wp-content/uploads/anime-kiss-36.gif",
        "https://gifdb.com/images/high/taichi-yaegashi-anime-kiss-dcgns4emesa0hy6a.gif",
        "https://64.media.tumblr.com/66318df2774d62035bc448fd138261da/tumblr_otjtxwugm41t0no49o1_500.gif",
        "https://i.redd.it/qz6sd0kjh8r61.gif",
        "https://64.media.tumblr.com/51df4395955caa4d5d41e68182f82bc0/tumblr_n0ycutO5aU1qcsnnso1_500.gif",
        "https://64.media.tumblr.com/57bd69c651a73ebe9cc340a46c706071/tumblr_mq7v5ffIK71s83c9go1_500.gif",
        "https://i.makeagif.com/media/7-03-2023/_GTK50.gif",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kisscheck')
        .setDescription('Envía una imagen al canal')
        .addUserOption(option =>
            option.setName('usuario')
                .setDescription('Usuario al quien quieres darle un beso en la mejilla')
                .setRequired(true)
            ),

    execute: async function (interaction) {
        var usuario = interaction.user;
        var usuarioMencionado = interaction.options.getUser('usuario');

        var objetoUsuario = interaction.client.database.get(usuario.id);
        if (!objetoUsuario) objetoUsuario = interaction.client.database.create(usuario.id, {
            globalName: usuario.globalName,
            besosmejilla: {}
        });
        if (!objetoUsuario.besosmejilla) objetoUsuario.besosmejilla = {};

        objetoUsuario.besosmejilla[usuarioMencionado.id] = objetoUsuario.besosmejilla[usuarioMencionado.id] ? objetoUsuario.besosmejilla[usuarioMencionado.id] + 1 : 1;
        objetoUsuario.save();

        const embed = new EmbedBuilder()
            .setTitle(`**${usuario.globalName}** ha besado en la mejilla a **${usuarioMencionado.globalName}**`)
            .setDescription(`${usuario.globalName} le ha dado ${objetoUsuario.besosmejilla[usuarioMencionado.id]} besos en la mejilla a ${usuarioMencionado.globalName}`)
            .setImage(randomPat())
            .setColor(0xffb7c5);

        await interaction.reply({ embeds: [embed] })
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };