var ENVIRONMENT = {
  production: {
    pg: {
      user: 'gopamoja-app',
      host: 'gopamoja-db-1-do-user-6613101-0.db.ondigitalocean.com',
      database: 'gopamoja-pool',
      password: 'muyuaq0b3zjekgqg',
      port: 25061,
      ssl: require
    },
    bot: {
      token: '680504648:AAF_6NsJvKTWucf-Zlr-vwWkD9M0b78HZxc',
      chat_id: -380605324,
      host: 'https://bot.gopamoja.com'
    }
  },
  development: {
    pg: {
      user: 'gopamoja-app',
      host: 'gopamoja-db-1-do-user-6613101-0.db.ondigitalocean.com',
      database: 'gopamoja-dev',
      password: 'muyuaq0b3zjekgqg',
      port: 25061,
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
      user: 'gopamoja-app',
      host: 'gopamoja-db-1-do-user-6613101-0.db.ondigitalocean.com',
      database: 'gopamoja-staging',
      password: 'muyuaq0b3zjekgqg',
      port: 25061,
      ssl: require
    },
    bot: {
      token: '1037429611:AAEd_vsl6Lx5GR4b8-3hVN-YJ2YRObeTtaQ',
      chat_id: -320876192,
      host: 'https://test.bot.gopamoja.com'
    }
  }
};

module.exports = ENVIRONMENT[process.env.ENVIRONMENT || 'development']
