var express = require('express');
var router = express.Router();
const RequestReaderBattle  = require('../RequestReader/RequestReaderBattle');
const ControleurBattle  = require('../controler/battle');

/* POST registri for add user. */
router.get('/', (req, res) => {
    let controleurBattle = new ControleurBattle();
    controleurBattle.listBattles(function (result) {
        // 201 -> created return id
        if(result.statusRequest == 200){
            res.status(200).json({battles: result.battles});
        // 500 -> other probleme
        }else{
            res.status(500).json({message: 'restart after'});
        }
    });

});
router.post('/',(request,res) => {
    let requestReaderBattle = new RequestReaderBattle();
    requestReaderBattle.readData(request, function (info){
        res.status(info.statusRequest).json(info.body);
    });
    
});
module.exports = router;
