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

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет! Я бот Octagon. Напиши /help чтобы увидеть список команд.');
});

// 1. КОМАНДА /help - возвращает список команд с описанием
bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    const helpText = `
📋 *Список команд:*

/help - показать список команд
/site - получить ссылку на сайт Octagon
/creator - узнать создателя бота

ℹ️ *Как пользоваться:* просто напишите команду в чат
    `;
    bot.sendMessage(chatId, helpText, { parse_mode: 'Markdown' });
});

// 2. КОМАНДА /site - отправляет ссылку на сайт октагона
bot.onText(/\/site/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '🌐 *Сайт Octagon:* https://octagon.it', { parse_mode: 'Markdown' });
});

// 3. КОМАНДА /creator - отправляет ваше ФИО
bot.onText(/\/creator/, (msg) => {
    const chatId = msg.chat.id;
    
    bot.sendMessage(chatId, '👨‍💻 *Создатель бота:* Литвиненко Егор Александрович', { parse_mode: 'Markdown' });
});


console.log('✅ Бот запущен! Доступные команды: /help, /site, /creator');
