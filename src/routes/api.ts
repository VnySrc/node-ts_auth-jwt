import { Router } from 'express';
import {Auth} from "../middlewares/auth"

import * as ApiController from '../controllers/apiController';
import * as MailController from "../controllers/mailController"


const router = Router();

router.post('/register', ApiController.register);
router.post('/login', ApiController.login);

router.get('/list', Auth.private, ApiController.list);

router.post("/contato", MailController.contato)

export default router;