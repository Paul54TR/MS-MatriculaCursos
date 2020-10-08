const express = require('express');
const router = express.Router();
var request = require('request');

var enrollments = require('../../../../data');
const { route } = require('../apiv1route');

// [POST] dominio.../api/v1/log/add
router.post('/enrollment',(req,res)=>{

    var options = {
    'method': 'POST',
    'url': 'http://localhost:4000/api/v1/course/validPayment',
    'form': {
        'idCourse': req.body.idCourse,
        'idStudent': req.body.idStudent
    }
    };

    request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    if(response.body == "true" || response.body == true || response.body == 'true'){
        var enrollment = {idCourse: req.body.idCourse,idStudent: req.body.idStudent};
        enrollments.push(enrollment);
        console.log(enrollments);
        res.send(true);
    }else{
        res.send(false);
    }
    });

});

router.get('/enrollment/:idStudent',(req,res)=>{
    var courses = enrollments.find(enrollment=>enrollment.idStudent== req.body.idStudent);
    return res.send(courses);
})

module.exports = router;

