const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT||5000;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());



const apiRoute = require('./routes/api/apiroutes');
const { urlencoded } = require('body-parser');

app.use('/api',apiRoute);

app.listen(port,()=>{
    console.log("Aplicación corriendo en puerto : "+ port);
})
