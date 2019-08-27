const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
return sequelize.define('todo', {
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
    completed: {
        type: Sequelize.BOOLEAN
        // allowNull defaults to true
    },
    userId: {
        type: Sequelize.INTEGER
        // allowNull defaults to true
    }
}, {
        define: {
            completed: false
        }
    });
}