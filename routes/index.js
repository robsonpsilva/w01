
const express = require('express');
const app = express();

const routes = require('express').Router();

const baseController = require('../controllers');



routes.use((req, res, next) => {
  const now = new Date(Date.now());
  const friendlyDate = now.toLocaleString('pt-BR', {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric'
  });
  console.log('Time:', friendlyDate);
  next();
});

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
