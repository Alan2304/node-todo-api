//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');    
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //Delete Many
    //db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
    //    console.log(res);        
    //});
    
    //Delete One
    //db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //    console.log(result);
    //});
    
    //findOneAndDelete
    //db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //    console.log(res);
    //});

    //db.collection('Users').deleteMany({name: 'Alan'});

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5c17e896d154ed10f4867562')}).then((res) => {
        console.log(JSON.stringify(res, undefined, 2));
    });

    //client.close();
});
