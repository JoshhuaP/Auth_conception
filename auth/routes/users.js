var express = require('express');
var router = express.Router();
const RequestReaderUser  = require('../RequestReader/RequestReaderUser');

/* POST registri for add user. */
router.post('/',(request,res) => {
    console.log("rentre debut")
    let requestReaderUser = new RequestReaderUser();
    console.log("apres")
    info = requestReaderUser.readData(request);
    res.status(info.status).json(info.body).send();
    });
module.exports = router;
