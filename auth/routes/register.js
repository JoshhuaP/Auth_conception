var express = require('express');
var router = express.Router();


/* POST registri for add user. */
router.post('/',(request,res) => {
    info = RequestReaderRegister.readData(request);
    res.status(info.status).json(info.body).send();
    });
module.exports = router;
