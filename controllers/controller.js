const Employee = require('../models/employee');
const path = require('path');
exports.getdefault = (req, res) => {
    res.sendFile(path.resolve('views/countdown.html'));
};

exports.aboutus = function (req, res) {
    res.send("You are on about us route path");
};
//
exports.addweight = function (req, res) {
    let empName = req.body.empName;
    let empWeight = req.body.empWeight;
    res.end(`POST request Suceeded, we got ${empName} who weights ${empWeight} , thanks`);
};
//
exports.getemployees = function (req, res) {
   // res.send('You are on the getemployees route.');

   Employee.find({},function(err,results){
    if(err){
        res.end(err);
    }
    res.json(results);
   });
};

exports.deletebyname = (req, res) => {
let empToDelete = req.body.empName;
Employee.deleteOne({empName:empToDelete},(err,result)=>{
    if(err)
        res.send(err);
    res.end(`Deleted ${empToDelete}`); 
});
};

exports.addemployee = (req, res) => {
    let empName = req.body.empName;
    let empPass = req.body.empPass;
    const Emp = new Employee();
    Emp.empName = empName;
    Emp.empPass = empPass;
    Emp.save({}, (err)=>{
        if(err)
            res.end(err);
        res.end(`Create ${Emp.empName}`);
    });

};

exports.updatedoc = (req,res) =>{
    let empName = req.body.empName;
    let newPass = req.body.empPass;
    let query = { empName : empName};
    let data = { $set: {empPass : newPass}};
    Employee.updateOne(query, data, (err,result)=>{
        if(err)
            res.end(err);
        res.json(result);
        //res.end(`Update Success for ${empName}, with result matched count ${result.matchedCount} modifiedCount ${result.modifiedCount} upsertedId: ${result.upsertedId} acknowledgement: ${result.acknowledged}`);
    });
    // Employee.find({},(err,result)=>{
    //     res.json(result);
    // });

};