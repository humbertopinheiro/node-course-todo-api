const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('../server/models/Todo');
const { User } = require('../server/models/User');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove("5c3741740f6105f9fd319b70").then(todo => {
    console.log(todo);
});