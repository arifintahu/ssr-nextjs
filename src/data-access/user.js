const db = require("../loaders/db");

module.exports = {
    getAllUser: () => {
        return new Promise((resolve, reject) => {
            db.user.findAll({
                attributes: ['username', 'email', 'full_name']
            })
            .then((result) => {
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
        })
    },
    getUser: (username) => {
        return new Promise((resolve, reject) => {
            db.user.findOne({
                where: {
                    username
                }
            })
            .then((result) => {
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            })
        });
    }
}