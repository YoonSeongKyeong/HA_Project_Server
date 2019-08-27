const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
return sequelize.define('user', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    username: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    email: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    phone: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    website: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    province: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    city: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    district: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    street: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    zipcode: {
        type: Sequelize.STRING
        // allowNull defaults to true
    }
}, {
        // options
    });
}