const sql = require('mssql');

let pool;

const connectToDatabase = async () => {
  if (!pool) {
    try {
      pool = await sql.connect(process.env.DATABASE_URL);
    } catch (err) {
      console.error('Database connection failed!', err);
      throw err;
    }
  }
  return pool;
};

module.exports = { connectToDatabase };
