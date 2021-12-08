const sqlite3 = require('sqlite3')
class AppDAO {
  constructor() {
    let db = new sqlite3.Database("./auth_db/db_conception.db", sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Connected to the in-memory SQlite database.');
    });
    
    db.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Close the database connection.');
    });
  }
}
var test = new AppDAO()
module.exports = AppDAO