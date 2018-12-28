var mongoose = require('mongoose');

// Connect to the Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
}