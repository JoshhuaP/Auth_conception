const sqlite3 = require('sqlite3')
/*class AppDAO {
  constructor() {
    let db = new sqlite3.Database(__dirname +"/db_conception.db", sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        console.log("erreur")
        return console.error(err.message);
      }
      console.log('Connected to the in-memory SQlite database.');
    });
  }

  close(){
    db.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Close the database connection.');
    });
  }
}
var test = new AppDAO()*/
let db = new sqlite3.Database(__dirname +"/db_conception.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.log("erreur")
      return console.error(err.message);
    }

    db.run('CREATE TABLE IF NOT EXISTS `user` (`id_user` INTEGER PRIMARY KEY AUTOINCREMENT , `pseudo` varchar(50) NOT NULL,`email` varchar(100) NOT NULL,`password` varchar(250) NOT NULL)');
    db.run('CREATE TABLE IF NOT EXISTS `battle` ( `id_battle` INTEGER PRIMARY KEY AUTOINCREMENT , `id_joueur1` INTEGER NOT NULL, `id_joueur2` INTEGER NOT NULL, `score1` smallint(6) NOT NULL, `score2` smallint(6) NOT NULL, `date` datetime NOT NULL, `duree` time NOT NULL, CONSTRAINT `FK1_battle_score` FOREIGN KEY (`id_joueur1`) REFERENCES `user` (`id_user`), CONSTRAINT `FK2_battle_score` FOREIGN KEY (`id_joueur2`) REFERENCES `user` (`id_user`))')
    console.log('Connected to the in-memory SQlite database.');
  });

module.exports = db