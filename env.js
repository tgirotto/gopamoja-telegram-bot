var ENVIRONMENT = {
  production: {
    pg: {
      user: '',
      host: '',
      database: '',
      password: '',
      port: ,
      ssl: require
    },
    bot: {
      token: '',
      chat_id: ,
      host: 'https://bot.gopamoja.com'
    }
  },
  development: {
    pg: {
      user: '',
      host: '',
      database: '',
      password: '',
      port: ,
      ssl: require
    },
    bot: {
      token: '',
      chat_id: '',
      host: 'http://localhost:3003'
    }
  },
  staging: {
    pg: {
      user: '',
      host: '',
      database: '',
      password: '',
      port: ,
      ssl: require
    },
    bot: {
      token: '',
      chat_id: ,
      host: 'https://test.bot.gopamoja.com'
    }
  }
};

module.exports = ENVIRONMENT[process.env.ENVIRONMENT || 'development']
