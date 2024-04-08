const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const randomPat = () => {
    const pats = [
        "https://i.gifer.com/1Ky5.gif",
        "https://media1.tenor.com/m/XhdHGRof6WEAAAAC/anime-ataque-golpe-en-la-pared.gif",
        "https://media1.tenor.com/m/lcmyfsNu54sAAAAC/naruto-attack.gif",
        "https://i.pinimg.com/originals/bc/43/b9/bc43b92673fa15df86fd74cb76bcb78f.gif",
        "https://i.gifer.com/Aq6y.gif",
        "https://i.gifer.com/N32W.gif",
        "https://33.media.tumblr.com/e832f2d61b191f448a7977a6c93e9ef6/tumblr_nj472drxAK1s8sotmo1_500.gif",
        "https://pa1.aminoapps.com/6351/3ac6a95e77344a51570d4aee6e1c987913381e89_hq.gif",
        "https://pa1.aminoapps.com/6100/8b0df174545893fc4eb37e37578799ba3e60267c_hq.gif",
        "https://i.gifer.com/W1xh.gif",
        "https://i.gifer.com/9eUJ.gif",
        "https://4.bp.blogspot.com/-By0nq6P2Oos/XEdaqYGARSI/AAAAAAABbA8/GlGrpW0RfAgHX0IbN2A_Cr_H6t048vfrwCKgBGAs/s1600/Omake%2BGif%2BAnime%2B-%2BTensei%2BShitara%2BSlime%2BDatta%2BKen%2B-%2BEpisode%2B16%2B-%2BMilim%2BPunches.gif",
        "https://c.tenor.com/3CUBZHrDUvUAAAAC/punch-combo.gif",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}


module.exports = {
    data: new SlashCommandBuilder()
        .setName('punch')
        .setDescription('Envía una imagen al canal')
        .addUserOption(option =>
            option.setName('usuario')
                .setDescription('Usuario al quien quieres pegar')
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
            .setTitle(`**${usuario.globalName}** ha pegado a **${usuarioMencionado.globalName}**`)
            .setDescription(`${usuario.globalName} le ha dado ${objetoUsuario.abrazos[usuarioMencionado.id]} puñetazos a ${usuarioMencionado.globalName}`)
            .setImage(randomPat())
            .setColor(0xffb7c5);

        await interaction.reply({ embeds: [embed] })
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };