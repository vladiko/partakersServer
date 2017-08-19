import express = require('express');
import partakerService = require('../services/partakers.service');
const router = express.Router();


router.get('/', partakerService.partakerService.getPartakers);

router.post('/', partakerService.partakerService.addPartaker);

router.delete('/', partakerService.partakerService.removePartaker);

export default router;