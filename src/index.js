const app           = require('express')();
const bodyParser    = require('body-parser');
const server        = require('http').createServer(app);
const next          = require('next');

const loader        = require('./loaders');
const dev           = process.env.NODE_ENV !== 'production';
const nextApp       = next({ 
    dev,
    dir: './src/client'
 });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(async () => {
    await loader();
    const PORT  = process.env.PORT || 8080;
    const api   = process.env.API || 'api';
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.get('*', (req, res) => {
        return nextHandler(req, res);
    });
  
    // app.post('/login', (req, res) => {
    //   controller.user.login(req, res);
    // });
  
    // app.post('/register', (req, res) => {
    //   controller.user.register(req, res);
    // });
  
    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
    });  
});

