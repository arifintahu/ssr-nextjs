const dataAccess    = require('../data-access');
const user          = require('./user'); 

module.exports  = {
    caseUser: user(dataAccess)
}