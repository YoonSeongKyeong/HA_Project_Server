const Todo = require('../models/Todo')

module.exports = {
    GETALL: (callback) => {
        Todo.findAll().then(todos => {
            callback(JSON.stringify(todos));
        }).catch(err => new Error("GetAll Failed on Todo", err));
    }
    , GETONE: (id, callback) => {
        Todo.findOne({
            where: { id }
        }).then(todo => {
            callback(JSON.stringify(todo));
        }).catch(err => new Error("GetOne Failed on Todo", err));
    }
    , GETWITHUSERID: (userId, callback) => {
        Todo.findOne({
            where: { userId }
        }).then(todo => {
            callback(JSON.stringify(todo));
        }).catch(err => new Error("GetWithUserId Failed on Todo", err));
    }
    , POST: (obj, callback) => {
        const { title, completed, userId } = obj;
        Todo.create({ title, completed, userId })
            .then(Todo => callback(Todo)).catch(err => new Error("Post Failed on Todo", err));
    }
    , PUT: (obj, callback) => {
        const { id, title, completed, userId } = obj;
        Todo.update({ title, completed, userId }, {
            where: {id}
        }).then((number) => callback(number)).catch(err => new Error("Put Failed on Todo", err));
    }
    , DELETE: (id, callback) => {
        Todo.destroy({
            where: { id }
        }).then((number) => {
            callback(number);
        }).catch(err => new Error("Delete Failed on Todo", err))
    }
}