//This module exports a function which we will use with our sequelize 
//variables in the userDAO.

//Parameters: 
//sequelize : This is the instantiated sequelize instance
//DataTypes : This is the Sequelize library which we just use for data type definitions
module.exports = function (sequelize, DataTypes) {

    return sequelize.define('user', {

        UserID: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        DisplayName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false
        }

    }, {
        timestamps: false
    })
}