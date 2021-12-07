var express = require('express');
var router = express.Router();

/* GET user to delete */
router.get('/', function(req, res, next) {
  res.send('delete a user');
  id = parseInt(req.params.userID);
  deleteUserToDB(id);
});

const {Sequelize, INTEGER} = require('sequelize');

function deleteUserToDB(id)
{
  
  const sequelize = new Sequelize("", "root", "toor",
  {dialect : "mysql", host : "localhost"});

  try {
    sequelize.authenticate();
    console.log("Database connected");

   sequelize.query("DELETE FROM id WHERE address = (%d);", id);

  } catch(e){
      console.error("Can't connect to database : \n", e.message);
  }
}

module.exports = router;