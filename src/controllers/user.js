module.exports  = {
    test: async (req, res) => {
        const result = await db.user.findAll().catch((err) => {
            res.status(500).send(err);
        });
        res.status(200).send(result);
    }
}