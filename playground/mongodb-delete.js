const {MongoClient, ObjectID} = require('mongodb');

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//     if(err) return console.log('Unable to connect to database', err);
    
//     const db = client.db('TodoApp');

//     // deleteMany
//     // db.collection('Todos').deleteMany({ text: 'go to the gym'}).then((result) => {
//     //     console.log(result);
//     // });

//     //deleteOne
//     // db.collection('Todos').deleteOne({text: 'wash the dishes'}).then((result) => {
//     //     console.log(result);
//     // });

//     // findOneAndDelete
//     // db.collection('Todos').findOneAndDelete({text: 'wash the dishes'}).then((result) => {
//     //     console.log(result);
//     // });

//     client.close();
// });


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) return console.log('Unable to connect', err);

    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Users').deleteMany({name: 'Beto'}).then((result) => {
    //     console.log(result);
    // });

    let user = {};
    // Find and Delete
    db.collection('Users').findOne({name: 'Jose'}).then((result) => {
        user = result;
        console.log(user);
    });

    db.collection('Users').findOneAndDelete({_id: new ObjectID(user._id)}).then((result) => {
        console.log(result);
    });

    client.close();
});