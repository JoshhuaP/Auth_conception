var express = require('express');
var router = express.Router();
const RequestReaderUser  = require('../RequestReader/RequestReaderUser');

/* POST registri for add user. */
router.post('/',(request,res) => {
    let requestReaderUser = new RequestReaderUser();
    info = requestReaderUser.readData(request);
    res.status(info.status).json(info.body).send();
    });
module.exports = router;
