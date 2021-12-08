var user_dao = require('auth_db').user_dao;

module.exports = class ControleurUser {
    /**
     * @param { Cle d'identification } key 
     */

    deleteUserToDB(mail)
    {
        user_dao.findByMail(mail, function(user){
            key = user.id;
            user_dao.findByKey(key,function(err,rows){
                if(rows.toString()==""){
                    user_dao.delete(key, (err, user)=>{
                        if(err == null){
                            console.log(user)
                            return {status:201, id : user.id}
                        }else{
                            return {"erreur" : "bdd"}
                        }
                    });
                }else{
                    console.log(rows)
                    return {status:403, id : "delete"}
                }
            });
        } );

    }
}


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