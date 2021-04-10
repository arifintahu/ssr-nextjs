module.exports = ({ route, controller }) => {
    route.get('/test', [], (req, res) => {
        controller.user.test(req, res);
    });

    return route;
};