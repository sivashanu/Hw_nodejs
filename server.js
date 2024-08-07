var _ = require('lodash')
var fs = require('fs')
var os = require('os')

var user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('greeting.txt' , 'Hi ' +user.username + ' !' ,()=>{console.log("File is created");
})

var data = ["person","1",1,4,'#',"person",1]
var filter = _.uniq(data);
console.log(filter);
