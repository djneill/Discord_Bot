const { SlashCommandBuilder } = require('discord.js');
const link = 'https://leonnoel.com/100devs/'

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('what_is_100Devs')
        .setDescription('Provides information about <100Devs>.'),
    async execute(interaction) {
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        await interaction.reply(`${interaction.user.globalName} wants to learn more about 100Devs, this is the information you're looking for. ${link}`);
    },
};

