const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 3
}

var token  = jwt.sign(data, '123oba');

var decoded = jwt.verify(token, '123oba');
console.log(token, decoded);



// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(message, hash);

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// token.data.id = 5;

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash){
//     console.log('Data not changed');
// }else{
//     console.log('Data has changed');
// }

