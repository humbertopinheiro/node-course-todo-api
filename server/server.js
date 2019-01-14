const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/Todo');
const {User} = require('./models/User');


var app = express();
const port = process.env.PORT || 3000;

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

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;

    if(!ObjectID.isValid(id)) return res.status(404).send({error: 'Invalid Id'});

    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo) return res.status(404).send({error: 'Todo not found'});

        res.status(200).send({todo});
    }, (err) => {
        res.status(400).send({error: 'Request failed'});
    })
});

app.patch('/todos/:id', (req, res) => {
    const id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send({error: 'Invalid ID'});
    }

    const body = _.pick(req.params.body, ['text', 'completed']);

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    }else{
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if(!todo){
            res.status(404).send('Todo not found');
        }
        res.send({todo});
    }).catch(e => res.status(400).send({error: 'Request failed'}));

});

app.listen(3000, () => {
    console.log('Running on 3000');
});

module.exports = {
    app
}