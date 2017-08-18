import express = require('express');
import partakerService = require('../services/partakers.service');
const router = express.Router();


router.get('/', (req: express.Request, res: express.Response) => {
    //public firstName: string, public lastName: string
    //let retObj = [{ firstName: 'Tania', lastName: 'Borisova' }];
    let retObj = partakerService.partakerService.getPartakers();
    res.json(retObj);
});

router.post('/', (req: express.Request, res: express.Response) => {
    //public firstName: string, public lastName: string
    partakerService.partakerService.addPartaker(req.body);
    res.json(req.body);
    //let retObj = [{ firstName: 'Tania', lastName: 'Borisova' }];
    //res.json(retObj);
});

export default router;