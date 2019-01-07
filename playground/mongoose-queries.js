const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('../server/models/Todo');
const {User} = require('../server/models/User');


// var id = "5c2ce108c9aa921d34103a9611";

// if(!ObjectID.isValid(id)){
//     return console.log('Id is not valid');
// }

// Todo.find({
//     _id: id
// }).then(todos => {
//     console.log('Todos ', todos);
// });

// Todo.findOne({
//    _id: id 
// }).then(todo => {
//     console.log('Todo ', todo);
// });

// Todo.findById(id).then(todo => {
//     console.log('Todo by Id ', todo);
// })

const userId = "5c24fd718794ee21ef8ff80d";
User.findById(userId).then(user => {
    console.log('User Found: ', user);
}).catch(e => console.log(e));