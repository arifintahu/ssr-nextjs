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
            })
        })
    }
}