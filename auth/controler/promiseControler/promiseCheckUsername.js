var user_dao = require('auth_db').user_dao;
module.exports = function PromiseCheckUsername(key, password)
{
    return new  Promise((resolve, reject)=>{
        const rows = user_dao.findByPseudo(key, function(err,rows){
            if(rows)
                if(rows.length ==1)
                {
                    result = {
                        "password" : password,
                        "hash": rows[0].password,
                        "username": key,
                        "id_user" : rows[0].id_user
                    }
                    resolve(result);
                }
                else{
                    reject(err)
                }           
        });
    });
}