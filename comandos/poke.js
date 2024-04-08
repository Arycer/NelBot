const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const randomPat = () => {
    const pats = [
        "https://i.gifer.com/FK0b.gif",
        "https://i.gifer.com/SKql.gif",
        "https://media1.tenor.com/m/80ZNJEEnjrYAAAAC/anime-poke.gif",
        "https://iili.io/b5WTej.gif",
        "https://i.pinimg.com/originals/b4/95/fb/b495fb19f4b9a1b04f48297b676c497b.gif",
        "https://i.pinimg.com/originals/f1/6d/16/f16d16a4ac88a59168916ddfd62b49dd.gif",
        "https://media1.tenor.com/m/BLCPTKTE2L0AAAAC/poke-anime.gif",
        "https://i.gifer.com/OWba.gif",
        "https://i.pinimg.com/originals/26/65/74/266574c657accd6c7e8452a7b9d9dc47.gif",
        "https://64.media.tumblr.com/cae8f4b010cd876f7deda30e592209d6/tumblr_p1edoeZ50v1wn2b96o1_500.gif",
        "https://i.redd.it/pticuot0iuta1.gif",
        "https://media.moddb.com/images/groups/1/25/24269/ezgif.com-a0f7eccd83.gif",
        "https://i.gifer.com/8xtR.gif",
        "https://i.pinimg.com/originals/5b/0a/e6/5b0ae6915526fbce65601a74f28997d3.gif",
        "https://media1.tenor.com/m/WbfDx1RpvgwAAAAC/princess-connect-redive-poke.gif",
        "https://i.imgur.com/1ruT31Z.gif",
        "https://64.media.tumblr.com/ecb626dd6fa727378fced89316b2b333/tumblr_miqz8jAiAI1r3vlmio3_400.gif",
        "https://1.bp.blogspot.com/-0cu-3g3bio4/Vx_hCIRUcYI/AAAAAAAAcE8/mcV22O8uolst5z3Rd-reMOPhxoLLMeXaACKgB/s1600/Omake%2BGif%2BAnime%2B-%2BKuma%2BMiko%2B-%2BEpisode%2B4%2B-%2BMachi%2BCheek%2BPoke.gif",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('poke')
        .setDescription('Envía una imagen al canal')
        .addUserOption(option =>
            option.setName('usuario')
                .setDescription('Usuario al que quieres molestar')
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
            .setTitle(`**${usuario.globalName}** ha molestado a **${usuarioMencionado.globalName}**`)
            .setDescription(`${usuario.globalName} le ha dado ${objetoUsuario.abrazos[usuarioMencionado.id]} molestias a ${usuarioMencionado.globalName}`)
            .setImage(randomPat())
            .setColor(0xffb7c5);

        await interaction.reply({ embeds: [embed] })
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };