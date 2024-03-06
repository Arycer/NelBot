const randomPat = () => {
    const pats = [
        "https://media1.tenor.com/m/aZFqg65KvssAAAAC/pat-anime.gif",
        "https://i.pinimg.com/originals/4c/03/bb/4c03bbe17bc0825e064d049c5f8262f3.gif",
        "https://media1.tenor.com/m/Mjyd8s7XLkYAAAAd/neko-pat.gif",
        "https://media1.tenor.com/m/mjzPtcvwO2cAAAAC/pat-head-good-job.gif",
        "https://steamuserimages-a.akamaihd.net/ugc/957473464843447379/85A2A64F19A535C366C1A8ABE234D92106DBD5C3/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
        "https://steamuserimages-a.akamaihd.net/ugc/920301634489321412/DC24812202094BCD5797844BA68602A6D54EB170/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
        
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