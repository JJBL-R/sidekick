const { Pool } = require('pg');

const PG_URI =
  'postgres://jemiueks:kVHtkP1aNYgnjMJw0ymwOmpmY_DE4tFw@heffalump.db.elephantsql.com/jemiueks';

const pool = new Pool({ connectionString: PG_URI });

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
