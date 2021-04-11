const { caseUser } = require('../use-cases');

module.exports  = {
    test: async (req, res) => {
        const result = await caseUser.listUser().catch((err) => {
            res.status(500).send(err);
        });
        res.status(200).send(result);
    }
}