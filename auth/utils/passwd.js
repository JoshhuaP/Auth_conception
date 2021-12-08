const bcrypt = require("bcryptjs");
LocalStrategy = require("passport-local").Strategy;

//Load model

const User = require('auth_db').user_dao;

const loginCheck = passport => {
  passport.use(
    new LocalStrategy({ usernameField: "pseudo" }, (pseudo, password, done) => {
      //Check customer

      User.findOne({ pseudo: pseudo })
        .then((user) => {
          if (!user) {
            //si le nom d'utilisateur n'existe pas
            data = {}
            data.status = 403
            data.body = {"message" : RequestReaderReturn.AuthentificationFailed}
            return data;
          }

          //Match Password

          bcrypt.compare(password, "user.password to change", (error, isMatch) => {
            if (error) throw error;
            if (isMatch) {
              //si l'authentification réussit 
                 return generationToken() ;
            } else {
              // si le mot de passe est mauvais
              data = {}
              data.status = 403
              data.body = {"message" : RequestReaderReturn.AuthentificationFailed}
              return data;
            }
          });
        })
        .catch((error) => console.log(error));
    })
  );

  passport.serializeUser((user, done) => {
    done(null, "user.id to change");
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (error, user) => {//selon l'object User de la bdd
      done(error, "user");
    });
  });
};

module.exports = {
  loginCheck,
};
