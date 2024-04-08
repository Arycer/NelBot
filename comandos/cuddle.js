const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const randomPat = () => {
    const pats = [
        "https://i.pinimg.com/originals/d8/7c/5c/d87c5cdd0a68caf2b6feeec0f7da7315.gif",
        "https://media1.tenor.com/m/P54lVoy1FxkAAAAC/kuzu-no-honkai-hug.gif",
        "https://gifdb.com/images/high/cute-sleeping-anime-cuddle-0y4t23es1pzulfri.gif",
        "https://i.pinimg.com/originals/8f/8b/a3/8f8ba3baeecdf28f3e0fa7d4ce1a8586.gif",
        "https://gifdb.com/images/high/charming-anime-cuddle-lviox3vrl2snmiad.gif",
        "https://gifdb.com/images/high/smiling-girl-anime-cuddle-xvv81gp9u163xnhq.gif",
        "https://gifdb.com/images/high/animal-ears-boy-anime-cuddle-alfixpn3wj81ptsu.gif",
        "https://media1.tenor.com/m/moDYVLYRAkYAAAAC/hug-anime.gif",
        "https://media1.tenor.com/m/wZQ82apr3YMAAAAC/anime-cuddle.gif",
        "https://i.imgur.com/hwbfKwb.gif",
        "https://i.pinimg.com/originals/6d/c1/bd/6dc1bdc35d41a0cbb094b0299af32d65.gif",
        "https://i0.wp.com/drunkenanimeblog.com/wp-content/uploads/2017/10/snuggling-cuddling-anime-girls-gif.gif?resize=500%2C281&ssl=1",
        "https://gifdb.com/images/high/anime-boy-wants-cuddle-v5awreez6ggjoznf.gif",
        "https://media.tenor.com/bLttPccI_I4AAAAC/cuddle-anime.gif",
        "https://media1.tenor.com/m/pERmpp-SSJ4AAAAC/eli-cuddle-anime.gif",
        "https://media.tenor.com/A5ZuMAZ44l8AAAAC/anime-cuddle.gif",
        "https://media.tenor.com/9TN_Wmmvh7sAAAAC/anime-cuddle.gif",
        "https://media.tenor.com/8w4X8vAuWqEAAAAC/anime-cuddle.gif",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cuddle')
        .setDescription('Envía una imagen al canal')
        .addUserOption(option =>
            option.setName('usuario')
                .setDescription('Usuario con quien te acurrucas')
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
            .setTitle(`**${usuario.globalName}** se ha acurrucado con **${usuarioMencionado.globalName}**`)
            .setDescription(`${usuario.globalName} se ha acurrucado ${objetoUsuario.abrazos[usuarioMencionado.id]} veces con ${usuarioMencionado.globalName}`)
            .setImage(randomPat())
            .setColor(0xffb7c5);

        await interaction.reply({ embeds: [embed] })
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };