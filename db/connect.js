const { Pool } = require('pg');

const pool = new Pool({
  user: 'dariour',
  host: '138.68.87.73',
  database: 'db_dariour',
  password: 'password90',
  port: 5432,
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
}