const User = require('../models/User')

module.exports = {
    GETALL: (callback) => {
        User.findAll().then(users => {
            callback(JSON.stringify(users));
        }).catch(err => new Error("GetAll Failed on User", err));
    }
    , GETONE: (id, callback) => {
        User.findOne({
            where: { id }
        }).then(user => {
            callback(JSON.stringify(user));
        }).catch(err => new Error("GetOne Failed on User", err));
    }
    , GETWITHUSERID: (userId, callback) => {
        User.findOne({
            where: { userId }
        }).then(user => {
            callback(JSON.stringify(user));
        }).catch(err => new Error("GetWithUserId Failed on User", err));
    }
    , POST: (obj, callback) => {
        const { name, username, email, phone, website, province, city, district, street, zipcode } = obj;
        User.create({ name, username, email, phone, website, province, city, district, street, zipcode })
            .then(user => callback(user)).catch(err => new Error("Post Failed on User", err));
    }
    , PUT: (obj, callback) => {
        const { id, name, username, email, phone, website, province, city, district, street, zipcode } = obj;
        User.update({ name, username, email, phone, website, province, city, district, street, zipcode }, {
            where: {id}
        }).then((number) => callback(number)).catch(err => new Error("Put Failed on User", err));
    }
    , DELETE: (id, callback) => {
        User.destroy({
            where: { id }
        }).then((number) => {
            callback(number);
        }).catch(err => new Error("Delete Failed on User", err))
    }
}