const Pool = require('pg');

const PG_URI =
  'postgres://qpzayhak:Nv85nKLNZ4jc-OOGro0xt36HLkKqlU1B@heffalump.db.elephantsql.com/qpzayhak';
  
const pool = new Pool({ connectionString: PG_URI });

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
