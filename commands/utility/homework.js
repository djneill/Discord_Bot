const { SlashCommandBuilder } = require('discord.js');
const link = 'https://communitytaught.org/'

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('homework')
        .setDescription('Provides information about homework & assignments.'),
    async execute(interaction) {
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        await interaction.reply(`${interaction.user.globalName} is looking for the assignments. Here's the community taught progress tracker ${link}`);
    },
};