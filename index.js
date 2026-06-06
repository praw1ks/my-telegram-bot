const TelegramBot = require('node-telegram-bot-api');

const token = '8048096523:AAHrjDCLh1beONNivivmNuhE9teZqCySFYw';

const bot = new TelegramBot(token, {
    polling: true,
    request: {
        agentOptions: {
            keepAlive: true,
            family: 4
        }
    }
});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет, октагон!');
});

console.log('Бот запущен и ждёт команду /start');