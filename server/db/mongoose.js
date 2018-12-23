var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });
mongoose.connect('mongodb://todouser:alancool2304@ds243254.mlab.com:43254/todo-api', { useNewUrlParser: true }); //mongodb://<dbuser>:<dbpassword>@ds243254.mlab.com:43254/todo-api

module.exports = {
    mongoose
};