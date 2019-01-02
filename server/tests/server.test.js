const expect = require('expect');
const request = require('supertest');

const {Todo} = require('./../models/Todo');
const {app} = require('./../server');

beforeEach((done) => {
    Todo.deleteMany({}).then(() => done());
})

describe('POST /todos', () => {
    // it('should add a new Todo', (done) => {
    //     var text = 'Learn test';

    //     request(app)
    //         .post('/todos')
    //         .send({text})
    //         .expect(200)
    //         .expect((res) => {
    //             expect(res.body.text).toBe(text);
    //         })
    //         .end((err, res) => {
    //             if(err) return done(err);

    //             Todo.find().then((todos) => {
    //                 expect(todos.length).toBe(1);
    //                 expect(todos[0].text).toBe(text);
    //                 done();
    //             }).catch((e) => done(e));
    //         });
    // });

    // it('should not add a new Todo when sending invalid data', (done) => {
    //     request(app)
    //         .post('/todos')
    //         .send()
    //         .expect(400)
    //         .end((err, res) => {
    //             if(err) return done(err);

    //             Todo.find().then((todos) => {
    //                 expect(todos.length).toBe(0);
    //                 done();
    //             }).catch((e) => done(e));
    //         })
    // });
})