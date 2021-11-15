const expres = require('express');
const Router = expres.Router();

//Calling controlers
const { TestController } = require('../controllers/TestingAndLearningController')
//Calling controlers
Router.post('/testing',TestController);

module.exports = Router;