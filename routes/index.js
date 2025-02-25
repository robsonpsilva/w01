const app = express();

const routes = require('express').Router();

const baseController = require('../controllers');
app.use

routes.get('/', baseController.getName);

routes.get('/profile', (req, res) => {
    res.send('Hello World, This is profile router');
  });
   
routes.get('/login', (req, res) => {
res.send('Hello World, This is login router');
});

routes.get('/logout', (req, res) => {
res.send('Hello World, This is logout router');
});

module.exports = routes;
