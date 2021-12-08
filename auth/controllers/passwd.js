const bcrypt = require("bcryptjs");
LocalStrategy = require("passport-local").Strategy;

//Load model

const User = require("../models/User");

const loginCheck = passport => {
  passport.use(
    new LocalStrategy({ usernameField: "pseudo" }, (pseudo, password, done) => {
      //Check customer

      User.findOne({ email: email })
        .then((user) => {
          if (!user) {
            console.log("wrong pseudo");
            return done();
          }

          //Match Password

          bcrypt.compare(password, "user.password to change", (error, isMatch) => {
            if (error) throw error;
            if (isMatch) {
              return done(null, user);
            } else {
              console.log("Wrong password");
              return done();
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
/*
const loginUser = (req, res) => {
  const { pseudo, password } = req.body;

  //Required
  if (!pseudo || !password) {
    console.log("Please fill in all the fields");
    res.render("login", {
      pseudo,
      password,
    });
  } else {
    passport.authenticate("local", {
      successRedirect: "/dashboard",
      failureRedirect: "/login",
      failureFlash: true,
    })(req, res);
  }
};
    */