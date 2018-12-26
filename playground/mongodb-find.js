const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) return console.log('Unable to connect to MongoDB server');
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c1bdb480df3183779dcc01e')
    // }).toArray().then(docs => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, err => {
    //     console.log('Unable to connect to collection', err);
    // });

    // db.collection('Todos').find().count().then(count => {
    //     console.log('Todos count:', count);
    // }, err => {
    //     console.log('Unable to connect to collection', err);
    // });

    db.collection('Users').find({
        name: 'Beto'
    }).toArray().then((docs)=> {
        console.log('Found!');
        console.log(JSON.stringify(docs, undefined, 2));
    },(error) => {
        console.log('Unable to find it!');
    })

    client.close();
});