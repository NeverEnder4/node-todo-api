const { ObjectID } = require('mongodb');


const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

/* var _id = '5b4794e7ec1df42578afc1ee11';

if(!ObjectID.isValid(_id)) {
    console.log('ID not valid');
} */

/* Todo.find({
    _id
}).then((todos) => {
    if (!todos.length) {
        return console.log('Id not found');
    }
    console.log('Todos', todos)
});


Todo.findOne({
    _id
}).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo', todo)
}); */

/* Todo.findById(_id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo by Id', todo);
}).catch((e) => console.log(e)); */

//Query Users Collection

//User.findById, 3 cases

//User not found

//User found

//Error handling

var _id = '5b46e1b4c28b4433a81423d8';

User.findById(_id).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
})