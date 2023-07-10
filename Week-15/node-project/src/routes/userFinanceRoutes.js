const express = require('express');
const router = express.Router();
router.use(express.json());
const validateToken = require('../middleware/validateTokenHandler')
const {addAsset,getAllAsset,addEquity,getAllEquity,updateAsset,updateEquity,mailPortfolio} = require('../controller/userFinanceController')

router.post('/addAsset',validateToken,addAsset);

router.get('/getAssets',validateToken,getAllAsset);

router.post('/addEquity',validateToken,addEquity);

router.get('/getEquities',validateToken,getAllEquity);

router.put('/updateAsset',validateToken,updateAsset);

router.put('/updateEquity',validateToken,updateEquity);

router.post('/mail',validateToken,mailPortfolio);

module.exports=router;