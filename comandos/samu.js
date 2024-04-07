const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { data } = require('./samu');

const frases = [
  "Para cuando el edredón con tus tetas para Nel?? 😋😋",
  "Samu en sus días libres: https://cdn.discordapp.com/attachments/1034588634764025897/1157061180016296036/samu.jpg?ex=6605dc32&is=65f36732&hm=688d0e2dfdd9401fb41218c1e58f1d96fd8514f5eb82cfa2daeebf62e108dc77&",
  "\nSamu: La verdad que el edredón debe de ser un poco curioso.\nSara: El mio?\nSamu: No, el de mis tetas.",
  "\nNel: No puedo sentir pena por alguien inferior a mi\nSamu: NO TIO, el brazo izquierdo me vuelve a bailar",
  "A Samu le falta 3 dedos y por ende su cancion favorita es esta: https://www.youtube.com/watch?v=YsDPoDclP6k&ab_channel=LeonelAlv",
  "No sabes lo solo que estoy Marta ",
  "No para de dolerme el culo.",
  "Sabes lo mejor de ser viernes? Que salgo a la calle para patear a los negros.",
  

]


/*
Exportación de la función que se ejecuta al llamar al comando "ping".
*/

module.exports = {
  data: new SlashCommandBuilder()
    .setName("samuel")
    .setDescription("El más puto del server."),
  execute: async function (interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Frases del lore de Samuel")
      .setDescription(frases[Math.floor(Math.random() * frases.length)])
      .setColor("#ffb7c5")
      .setTimestamp();

    await interaction.reply({ embeds: [embed] }); // Responder con un mensaje al usuario.
},
};

