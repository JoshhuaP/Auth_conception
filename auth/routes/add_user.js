var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) 
{
  res.send('add a user');
    addUserToDB("tribu@squad.auth", "auth", "mdp");



});

const {Sequelize} = require('sequelize');
const bcrypt = require('bcrypt');


// Only string variables
function addUserToDB(mail, pseudo, password)
{
    const saltRounds = 10;
    // Connexion à la BDD
    const sequelize = new Sequelize("", "root", "toor",
        { dialect : "mysql", host : "localhost"});

    // vérif de connexion
    try {
        sequelize.authenticate();
        console.log(" Database connected");
        let saltString = start.toString();
        

        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(password, salt, (err, hashPasswd) => {
                if (!err)
                {
                    console.log(saltString);
                    // query to add a user into database
                    //sequelize.query("INSERT User VALUES(NULL, %s, %s, %s);", mail, pseudo, hashPasswd);
                }
            });
        });

    } catch(e){
        console.error(" Can't connect to database : \n", e.message );
    }
}


module.exports = router;