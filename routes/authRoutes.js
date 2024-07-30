import   express from 'express';
import {registercontroller,logincontroller,testController} from '../controller/authController.js';
import { isAdmin, requireSignIn } from '../middleware/authmiddleware.js';

const router= express.Router();
//register post
router.post('/register',registercontroller);
//login post 
router.post('/login',logincontroller);

//test routes

router.get('/test', requireSignIn ,isAdmin,testController)

export default router;