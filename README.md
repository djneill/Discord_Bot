# Discord Bot

## Introduction

This is a Discord bot designed to perform specific actions in response to commands or events triggered in a Discord server.

## Features

- **Auto Response:** Automatically responds with a predefined message when a specific word or phrase is mentioned.
- **Command Handling:** Executes commands triggered by users in the Discord server.
- **Customizable:** Easily customizable to add new commands or modify existing functionality.

## Technologies Used

- **Node.js:** Backend environment for running the Discord bot.
- **Discord.js:** Library for interacting with the Discord API.
- **JavaScript/TypeScript:** Programming languages used for bot development.

## Installation

1. Clone the repository:

   ``` git clone https://github.com/djneill/Discord_Bot.git ```

2. Install dependencies:

- cd Discord_Bot
- npm install

3. Configure the bot token:
- Create a .env file in the root directory.
- Add your Discord bot token, ClientId, GuildId to the .env file:
`
    DISCORD_BOT_TOKEN=your_bot_token_here
    CLIENTID=client_id
    GUILDID=guild_id `

4. Start the bot 
``` node index.js ```

5. Push new slash commands
``` node deploy-commands.js ```

## Usage

Invite the bot to your Discord server using the invite link generated after deploying your bot to a hosting platform.
Use the command prefix (e.g., !, ?, etc.) followed by the command name to interact with the bot (e.g., !help, !command, etc.).
Customize the bot's functionality by modifying the code in the src directory.
Contributing
Contributions are welcome! If you have suggestions or want to contribute to this project, please follow these steps:

## Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

