const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const randomPat = () => {
    const pats = [
        "https://media1.tenor.com/m/aZFqg65KvssAAAAC/pat-anime.gif",
        "https://i.pinimg.com/originals/4c/03/bb/4c03bbe17bc0825e064d049c5f8262f3.gif",
        "https://media1.tenor.com/m/Mjyd8s7XLkYAAAAd/neko-pat.gif",
        "https://media1.tenor.com/m/mjzPtcvwO2cAAAAC/pat-head-good-job.gif",
        "https://i.pinimg.com/originals/61/51/c4/6151c42c94df654b1c7de2fdebaa6bd1.gif",
        "https://media.tenor.com/Dbg-7wAaiJwAAAAM/aharen-aharen-san.gif",
        "https://i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif",
        "https://i.pinimg.com/originals/70/96/0e/70960e87fb9454df6a1d15c96c9ad955.gif",
        "https://media.tenor.com/Dbg-7wAaiJwAAAAM/aharen-aharen-san.gif",
        "https://tenor.com/view/pat-pat-gif-27638431",
        "https://media1.tenor.com/m/TKJSI_X-sKIAAAAC/assassination-classroom-anime.gif",
        "https://media1.tenor.com/m/Snem6pOBe4QAAAAC/korosensei-assassination-classroom.gif",
        "https://i.gifer.com/3dRv.gif",
    ];

    return pats[Math.floor(Math.random() * pats.length)];
}

module.exports = {
    name: 'pat',
    description: 'Envía una imagen al canal',
    execute: async function (interaction) {
        await interaction.reply(randomPat())
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };
  module.exports = {
    data: new SlashCommandBuilder()
        .setName('pat')
        .setDescription('Envía una imagen al canal')
        .addUserOption(option =>
            option.setName('usuario')
                .setDescription('Usuario al que quieres acariciar')
                .setRequired(true)
            ),

    execute: async function (interaction) {
        var usuario = interaction.user;
        var usuarioMencionado = interaction.options.getUser('usuario');

        var objetoUsuario = interaction.client.database.get(usuario.id);
        if (!objetoUsuario) objetoUsuario = interaction.client.database.create(usuario.id, {
            globalName: usuario.globalName,
            acaricias: {}
        });
        if (!objetoUsuario.acaricias) objetoUsuario.acaricias = {};

        objetoUsuario.acaricias[usuarioMencionado.id] = objetoUsuario.acaricias[usuarioMencionado.id] ? objetoUsuario.acaricias[usuarioMencionado.id] + 1 : 1;
        objetoUsuario.save();

        const embed = new EmbedBuilder()
            .setTitle(`**${usuario.globalName}** ha acariciado a **${usuarioMencionado.globalName}**`)
            .setDescription(`${usuario.globalName} le ha dado ${objetoUsuario.acaricias[usuarioMencionado.id]} caricias a ${usuarioMencionado.globalName}`)
            .setImage(randomPat())
            .setColor(0xffb7c5);

        await interaction.reply({ embeds: [embed] })
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
      },
  };