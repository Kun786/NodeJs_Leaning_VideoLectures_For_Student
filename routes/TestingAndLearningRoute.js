const expres = require('express');
const Router = expres.Router();

//Calling Middleware DIrectory to Access that middleware
const { UploadUserImage } = require('../libraryfiles/UploadUserImage');
//Calling Middleware DIrectory to Access that middleware


//Calling controlers
const { MyFirstApiContorller, UpdateUser, GetAllUsersFromTestCollection, GetUserById, UpdateById, RemoveUserById, RemoveAllCollection } = require('../controllers/TestingAndLearningController')
//Calling controlers
Router.post('/testing',UploadUserImage.single('Image'),MyFirstApiContorller );
Router.post('/UpdateTest/:_UserId',UpdateUser);
Router.get('/GetAllUsers',GetAllUsersFromTestCollection);
Router.get('/GetUserById/:_UserId',GetUserById);
Router.post('/UpdateUserById/:_UserId',UpdateById);
Router.delete('/DeleteUserById/:_UserId',RemoveUserById);
Router.delete('/DeleteTheWholeCollection',RemoveAllCollection);

module.exports = Router;