const expres = require('express');
const Router = expres.Router();

//Calling controlers
const { MyFirstApiContorller, UpdateUser } = require('../controllers/TestingAndLearningController')
//Calling controlers
Router.post('/testing',MyFirstApiContorller );
Router.post('/UpdateTest/:_UserId',UpdateUser)

module.exports = Router;