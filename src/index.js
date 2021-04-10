const express       = require('express');
const app           = express();
const server        = require('http').createServer(app);
const next          = require('next');

const loader        = require('./loaders');
const router        = require('./routers');
const dev           = process.env.NODE_ENV !== 'production';

const nextApp       = next({ 
    dev,
    dir: './src/client'
 });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(async () => {
    await loader();
    const PORT  = process.env.PORT  || 8080;
    const api   = process.env.API   || 'api';
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(`/${api}`, router);

    app.get('*', (req, res) => {
        return nextHandler(req, res);
    });
  
    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
    });  
});

