 const Sequelize = require(`sequelize`);
 
module.exports = (db) => {

    return db.define(`user`, {
        user_uid      : {
            type       : Sequelize.UUIDV4,
            primaryKey : true,
            defaultValue: Sequelize.UUIDv4
        },
        username        : {
            type      : Sequelize.STRING,
            allowNull : false,
        },
        password : {
            type      : Sequelize.STRING,
            allowNull : true
        },
        email         : {
            type      : Sequelize.STRING,
            allowNull : true
        },
        full_name     : {
            type        : Sequelize.STRING,
            allowNull   : true,
        },
        statusid  : {
            type      : Sequelize.INTEGER,
            allowNull : true
        },
        createdate    : {
            type      : Sequelize.DATE,
            allowNull : true
        },
        createby      : {
            type      : Sequelize.STRING,
            allowNull : true
        }
    }, {
        freezeTableName : true,
        createdAt       : false,
        updatedAt       : false,
    });

};