const Pool = require('pg');

const PG_URI =
  'postgres://dzqxnoir:lDahHIw4romfWrfZIbIoJGoBhk4RxlUi@heffalump.db.elephantsql.com/dzqxnoir';

const pool = new Pool({ connectionString: PG_URI });
