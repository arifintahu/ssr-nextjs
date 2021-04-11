const dotenv            = require('dotenv');
const fs                = require('fs');
const { Sequelize }     = require('sequelize');
const configModule      = require('./config');
const dbModule          = require('./db');
const basedir           = process.env.PWD; 

module.exports  = async () => {
    await configModule({ dotenv });
    global.db = await dbModule({ fs, Sequelize, basedir }).catch((err) => {
        console.error(err);
        process.exit();
    });
}