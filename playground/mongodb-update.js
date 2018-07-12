// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    /* db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b46cd1b027f82a2aa8ce567')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    }); */

    var users = db.collection('Users');

    users.findOneAndUpdate({
        _id: new ObjectID('5b46c1a454420f1a482254e4')
    }, {
        $set: {
            name: 'Ki-Ki'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    // client.close();
});