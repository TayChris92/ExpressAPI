//This module exports a function which we will use with our sequelize 
//variables in the userDAO.

//Parameters: 
//sequelize : This is the instantiated sequelize instance
//DataTypes : This is the Sequelize library which we just use for data type definitions
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        userID: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    })
}