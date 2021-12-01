const Employee = require('../models/employee');
const path = require("path");

exports.getdefault = (req, res) => {
    

    const html = `
    <!DOCTYPE HTML>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
p {
    text-align: center;
    font-size: 10vw;
    top: 50%;
    transform: translate(0, 50%);
}
body{
    background: aquamarine;
}
</style>
</head>
<body>

<p id="demo"></p>

<script>
// Set the date we're counting down to
var countDownDate = new Date("Dec 13, 2021 12:10:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
</script>

</body>
</html>

    `
    res.send(html);
    // res.sendFile('netlify-express/HTML/index.html');
    // //console.log(path.join(__dirname + '../HTML/index.html'));
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