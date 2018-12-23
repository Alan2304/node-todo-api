const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c1dc0e46e07cf36881b312d';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
    
// }

// // Todo.find({
// //     _id: id
// // }).then((todos) => {
// //     console.log('Todos', todos);
// // });

// // Todo.findOne({
// //     _id: id
// // }).then((todo) => {
// //     console.log('Todo', todo);
// // });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var idUser = '5c1d8d8a0d766b0fd8e3cc10';

User.findById(idUser).then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user, undefined, 2));

}).catch((e) =>{
    console.log(e);
})

