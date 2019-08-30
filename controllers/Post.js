const Post = require('../models/Post')

module.exports = {
    GETALL: (callback) => {
        Post.findAll().then(posts => {
            callback(JSON.stringify(posts));
        }).catch(err => new Error("GetAll Failed on Post", err));
    }
    , GETONE: (id, callback) => {
        Post.findOne({
            where: { id }
        }).then(post => {
            callback(JSON.stringify(post));
        }).catch(err => new Error("GetOne Failed on Post", err));
    }
    , GETWITHUSERID: (userId, callback) => {
        Post.findOne({
            where: { userId }
        }).then(post => {
            callback(JSON.stringify(post));
        }).catch(err => new Error("GetWithUserId Failed on Post", err));
    }
    , POST: (obj, callback) => {
        const { title, content, userId } = obj;
        Post.create({ title, content, userId })
            .then(Post => callback(Post)).catch(err => new Error("Post Failed on Post", err));
    }
    , PUT: (obj, callback) => {
        const { id, title, content, userId } = obj;
        Post.update({ title, content, userId }, {
            where: {id}
        }).then((number) => callback(number)).catch(err => new Error("Put Failed on Post", err));
    }
    , DELETE: (id, callback) => {
        Post.destroy({
            where: { id }
        }).then((number) => {
            callback(number);
        }).catch(err => new Error("Delete Failed on Post", err))
    }
}