const Router = require('express-promise-router');
const router = new Router()

let ENVIRONMENT = process.env.ENVIRONMENT || 'development';
console.log(`Running in ${ENVIRONMENT} environment...`)

let bot;
let token;
let CHAT_ID;
let TelegramBot = require('node-telegram-bot-api');

if(ENVIRONMENT === 'production') {
  token = '680504648:AAF_6NsJvKTWucf-Zlr-vwWkD9M0b78HZxc';
  bot = new TelegramBot(token, {polling: true});
  CHAT_ID = -380605324;
}

/* GET home page. */
router.post('/send_message', async (req, res, next) => {
  const message = req.body.message;

  if(typeof message !== 'string') {
    res.status(500).json({err: "Invalid message"});
    return;
  }

  try {
    if(ENVIRONMENT === 'production') {
      bot.sendMessage(CHAT_ID,message);
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
