
import express from 'express';
import adminController from '../controllers/adminController.js'


const adminRoute = express.Router();

adminRoute.post('/register', adminController.register);
adminRoute.post('/login', adminController.login);


export default adminRoute;
