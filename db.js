const sql = require('mssql');
const config = require('./dbConfig');

let pool;

const connectToDatabase = async () => {
  if (!pool) {
    try {
      pool = await sql.connect(config);
    } catch (err) {
      console.error('Database connection failed!', err);
      throw err;
    }
  }
  return pool;
};

module.exports = { connectToDatabase };
