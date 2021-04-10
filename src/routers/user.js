module.exports = ({ route }) => {
    route.get('/test', [], (req, res) => {
        res.send('test');
    });

    return route;
};