const dotenv        = require('dotenv');

const configModule  = require('./config');

module.exports  = async () => {
    await configModule({ dotenv });
}