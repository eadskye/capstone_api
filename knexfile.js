'use strict';
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'mandala_dev'
    }

  },
  test: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'mandala_test'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }


};
