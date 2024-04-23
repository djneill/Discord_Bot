const { SlashCommandBuilder } = require('discord.js');
const link = 'https://www.youtube.com/watch?v=o3IIobN4xR0&list=PLBf-QcbaigsJysJ-KFZvLGJvvW-3sfk1S'

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('where_to_start')
        .setDescription('Provides information about where to start.'),
    async execute(interaction) {
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        await interaction.reply(`${interaction.user.globalName} Don't delay, start today! ${link}`);
    },
};

