
import express from 'express';
import employeeController from '../controllers/employeeController.js';


const employeeRoute = express.Router();

employeeRoute.post('/addEmployee', employeeController.addEmployee);

export default employeeRoute;
