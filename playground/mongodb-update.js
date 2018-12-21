//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');    
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({ 
    //     _id: new ObjectID('5c1aea32005da92a8792843c')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }, function(err, result){
    //     if (err) {
    //         console.log(err);
    //     }
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({ 
        _id: new ObjectID('5c1af13a005da92a8792861b')
    }, {
        $set: {
            name: 'Alan Sanchez'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }, function(err, result){
        if (err) {
            console.log(err);
        }
        console.log(result);
    });

    //client.close();
});
