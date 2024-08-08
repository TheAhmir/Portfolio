// dbConfig.js
const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER, // e.g., 'yourserver.database.windows.net'
    database: process.env.DB_NAME,
    options: {
      encrypt: true, // Use encryption
    },
  };
  
  module.exports = config;
  