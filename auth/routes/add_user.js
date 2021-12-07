const bcrypt = require('bcrypt');


/**
 * 
 * @param { adresse mail de l'utilisateur } mail 
 * @param { le pseudo de l'utilisateur } pseudo 
 * @param { le mot de passe en claire } password 
 * @param { un connecteur de la base de donnnée } connnector 
 */
function addUserToDB(mail, pseudo, password, connnector)
{
    const saltRounds = 10;

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, (err, hashPasswd) => {
            if (!err)
            {
                console.log(saltString);
                // requete ppour ajouter un utilisateur dans la bdd
                connector.query("INSERT User VALUES(NULL, %s, %s, %s);", mail, pseudo, hashPasswd);
            }
        });
    });
}


module.exports = router;