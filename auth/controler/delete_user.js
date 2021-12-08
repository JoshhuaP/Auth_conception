var user_dao = require('auth_db').user_dao;

module.exports = class ControleurUser {
    /**
     * @param { Cle d'identification } key 
     */

    deleteUserToDB(key)
    {
      user_dao.findByKey(key,function(err,rows){
          if(rows.toString()==""){
              user_dao.delete(key, (err, user)=>{
                  if(err == null){
                      return {status:201, id : user.id}
                  }else{
                      return {"erreur" : "bdd"}
                  }
              });
          }else{
              return {status:403, id : "delete"}
          }
      });
    }
}