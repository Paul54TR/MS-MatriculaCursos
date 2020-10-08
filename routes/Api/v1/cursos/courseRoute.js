const express = require('express');
const router = express.Router();

var payments = require('../../../../data');

// [POST] dominio.../api/v1/log/add
router.post('/payments',(req,res)=>{
    
    var payment = {idCourse: req.body.idCourse,idStudent: req.body.idStudent};
    payments.push(payment);
    
    res.send(payments);
})

module.exports = router;

