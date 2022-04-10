const express = require('express');

const app = express();

const routes = require('./routes/tasks');

const tasks = require('./routes/tasks');

//middlewares
app.use(express.json()); 

//routes

app.use('/api/v1/tasks' , tasks);

const port =3000;

app.listen(port, console.log("Port 3000 is listening"));

