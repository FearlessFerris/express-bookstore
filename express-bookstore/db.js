/** Database config for database. */


const { Client } = require("pg");
const {DB_URI} = require("./config");

let db = new Client({
  'user': 'marcus',
  'password': 'Civil392601*',
  'database': 'books',
  'host': 'localhost',
  'port': 5432
});

db.connect();


module.exports = db;
