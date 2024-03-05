module.exports = {
    name: 'sendimage',
    description: 'Envía una imagen al canal',
    execute(message, args) {
        message.channel.send("https://media1.tenor.com/m/aZFqg65KvssAAAAC/pat-anime.gif")
        .then(() => console.log('Imagen enviada correctamente'))
        .catch(error => console.error('Error al enviar la imagen:', error));
    }
  };