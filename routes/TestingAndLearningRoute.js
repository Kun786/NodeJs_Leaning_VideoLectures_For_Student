const expres = require('express');
const Router = expres.Router();

//Calling controlers
const { MyFirstApiContorller  } = require('../controllers/TestingAndLearningController')
//Calling controlers
Router.post('/testing',MyFirstApiContorller );

module.exports = Router;