import express from 'express';
const app = express()
const port = 5000
import bodyParser from 'body-parser';
import sequelize from "./db/connection.js";

import employeeRoute from './app/routes/employeeRoute.js'
import adminRoute from './app/routes/adminRoute.js';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())



app.use("/api/employee/", employeeRoute);
app.use("/api/admin/", adminRoute);


sequelize.sync()
.then(result=>{console.log(result)})
.catch(error => {console.log(error)})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})