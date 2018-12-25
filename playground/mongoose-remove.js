const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndDelete({_id: '5c228d3229c97f3c6f58b888'}).then((todo) => {
    console.log(todo);
});

// Todo.findByIdAndRemove('5c228ab729c97f3c6f58b80f').then((todo) => {
//     console.log(todo);
// });


