const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/Todo');
const {User} = require('./models/User');


var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var newTodo = new Todo({
        text: req.body.text
    });

    newTodo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    var todos = Todo.find().then(todos => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos/:id', (req, res) => {
    const id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send({error: 'Invalid Id'});
    }

    Todo.findById(id).then(todo => {
        if(todo) {
            res.send({todo});
        } else {
            res.status(404).send({ error: 'Todo not found' });
        }
    }, (err) => {
            res.status(400).send({ error: 'Error' });
    });
});

app.listen(3000, () => {
    console.log('Running on 3000');
});

module.exports = {
    app
}