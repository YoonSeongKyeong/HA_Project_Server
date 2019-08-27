const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
return sequelize.define('post', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    content: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    userId: {
        type: Sequelize.INTEGER
        // allowNull defaults to true
    }
}, {
        // options
    });
}