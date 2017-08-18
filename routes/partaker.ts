import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    //public firstName: string, public lastName: string
    let retObj = [{ firstName: 'Tania', lastName: 'Borisova' }];
    res.send(retObj);
});

export default router;