var user_dao = require('auth_db').user_dao;

module.exports = class ControleurUser {
    /**
     * @param { adresse mail de l'utilisateur } mail 
     * @param { fonction de callback } callback 
     */

    deleteUserToDB(mail, callback)
    {

        user_dao.findByMail(mail,function(err,user){
            key = user.id;
            if(user.length == 1 )
            {
                user_dao.findByKey(key,function(err,rows)
                {
                    user_dao.delete(key, (err, user)=>
                    {
                        if(err == null)
                        {
                            callback( {statusRequest:201, id : user.insertId});
                        }else{
                            callback( {statusRequest:500 ,"erreur" : "bdd"});
                        }
                    });
                });
            }
            else
            {
                callback({statusRequest:403, id : user[0].id});
            }
        }); 
    }
}