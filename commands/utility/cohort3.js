const { SlashCommandBuilder } = require('discord.js');
const link = 'https://www.youtube.com/watch?v=o3IIobN4xR0&list=PLBf-QcbaigsJysJ-KFZvLGJvvW-3sfk1S'

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('cohort_3')
        .setDescription('Information related to Cohort 3'),
    async execute(interaction) {
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        await interaction.reply(`${interaction.user.globalName} wants to know more about Cohort 3. ${interaction.user.globalName} Don't delay, start today! ${link}`);
    },
};