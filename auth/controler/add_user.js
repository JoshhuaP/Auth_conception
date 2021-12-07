var user_dao = require('auth_db').user_dao;
const bcrypt = require('bcrypt');

module.exports = class ControleurUser {
    /**
     * 
     * @param { adresse mail de l'utilisateur } mail 
     * @param { le pseudo de l'utilisateur } pseudo 
     * @param { le mot de passe en claire } password 
     */
    addUserToDB(mail, pseudo, password)
    {
        const saltRounds = 10;

        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(password, salt, (err, hashPasswd) => {
                if (!err){
                    user_dao.findByMail(email,function(err,rows){
                        if(rows.toString()==""){
                            user_dao.insert([mail, pseudo, hashPasswd], (err, user)=>{
                                if(err == null){
                                    console.log(user)
                                    return {status:201, id : user.id}
                                }else{
                                    return {"erreur" : "bdd"}
                                }
                            });
                        }else{
                            console.log(rows)
                            return {status:403, id : "add"}
                        }
                    });
                }else{
                    return {erreur : "bcrypt"}
                }
            });
        });
    }
}