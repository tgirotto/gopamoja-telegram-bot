const Router = require('express-promise-router');
const router = new Router()

let ENVIRONMENT = process.env.ENVIRONMENT || 'development';
console.log(`Running in ${ENVIRONMENT} environment...`)

let bot;
let token;
let CHAT_ID;
let TelegramBot = require('node-telegram-bot-api');
const env = require('../env.js');

if(ENVIRONMENT === 'production' || ENVIRONMENT === 'staging') {
  token = env.bot.token;
  bot = new TelegramBot(token, {polling: true});
  CHAT_ID = env.bot.chat_id;
}

/* GET home page. */
router.post('/send_message', async (req, res, next) => {
  const message = req.body.message;

  if(typeof message !== 'string') {
    res.status(500).json({err: "Invalid message"});
    return;
  }

  try {
    if(ENVIRONMENT === 'production' || ENVIRONMENT === 'staging') {
      bot.sendMessage(CHAT,message);
    } else {
      console.log(message);
    }

    res.json({res: "ok"});
  } catch(e) {
    console.log(e);
    res.status(500).json({err: e.toString()});
  }
});

module.exports = router;
