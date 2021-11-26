const mongoose = require('mongoose');
const uri = 'mongodb+srv://sapbtpuser:0oLjjgGniuwz5K91@sapbtp-dev-cluster.fypxk.mongodb.net/Weights?retryWrites=true&w=majority';
mongoose.connect( uri, {useNewUrlParser: true});

const wSchema = new mongoose.Schema({
    empName: String,
    empPass: String,
    created: {type: Date, default: Date.now }
  },{
      collection:"Employees"
  });
  
  module.exports = mongoose.model('Employees' , wSchema);