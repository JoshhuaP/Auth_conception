var user_dao = require('auth_db').user_dao;
const bcrypt = require('bcrypt');

module.exports = class ControleurUser {
    /**
     * 
     * @param { adresse mail de l'utilisateur } mail 
     * @param { le pseudo de l'utilisateur } pseudo 
     * @param { le mot de passe en claire } password 
     */
    addUserToDB(mail, pseudo, password, callback)
    {
        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if (!err) {
                bcrypt.hash(password, salt, (err, hashPasswd) => {
                    if (!err){
                        user_dao.findByMail(mail,function(err,rows){
                            if(rows.length < 1 ){
                                user_dao.insert([mail, pseudo, hashPasswd], (err, user)=>{
                                    if(err == null){
                                        callback( {statusRequest:201, id : user});
                                    }else{
                                        callback( {statusRequest:500 ,"erreur" : "bdd"});
                                    }
                                });
                            }else{
                                callback({statusRequest:403, id : rows[0].id_user});
                            }
                        });
                    }else{
                        callback( {statusRequest:500 ,erreur : "bcrypt"} );
                    }
                });
            } else {
                callback( {statusRequest:500 ,erreur : "bcrypt"} );
            }
        });
    }
}