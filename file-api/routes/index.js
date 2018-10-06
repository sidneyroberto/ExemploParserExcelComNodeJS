import express from 'express';
import FileController from '../controllers/FileController';

const router = express.Router();
let fileCtrl = new FileController();

/* GET index page. */
router.post('/upload', fileCtrl.upload);

export default router;
