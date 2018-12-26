const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) return console.log('Unable to connect to MongoDB server');

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'wake up',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert on collection', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Beto',
        age: 26, 
        location: 'Brazil'
    }, (err, result) => {
        if(err) return console.log('Unable to save the user', err);

        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    });

    client.close();
});