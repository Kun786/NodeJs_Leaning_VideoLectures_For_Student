//call model here
const _TestingAndLearningCollection = require('../models/UserModel');

// const TestController = async (req,res) =>{
//    try {

//    } catch (error) {

//    }
// }



const MyFirstApiContorller = async (req, res) => {
    try {
        //Creat a varibale in which you Add data from the req
        console.log(req.file);
        const _TestingVariableToStoreInDataBase = new _TestingAndLearningCollection({
            Name: req.body.Name,
            MobileNumber: req.body.MobileNumber,
            Address: req.body.Address,
            ImageUrl: `/assets/${req.body.Name}/${req.file.filename}`,
            ImageName: req.file.originalname,
            ImageMimeType: req.file.mimetype
        });

        const _Result = await _TestingVariableToStoreInDataBase.save();

        res.json({
            Message: 'Added Successfully',
            Data: true,
            Result: _Result
        })
        //Save that variable into the database
        //if Saved send a message " You have saved the data"
    } catch (error) {
        res.json({
            Message: error.message,
            Data: false,
            Result: null
        })
    }

}

const UpdateUser = async (req, res) => {
    try {
        const _GetUserId = req.params._UserId;
        const _UpdateUser = await _TestingAndLearningCollection.updateOne(
            { _id: _GetUserId },
            req.body
        )
        res.json({
            Message: 'Update Successfully',
            Data: true,
            Result: _UpdateUser
        })
    } catch (error) {
        res.json({
            Message: error.message,
            Data: false,
            Result: null
        })
    }
}

const GetAllUsersFromTestCollection = async (req, res) => {
    try {
        const _GetALlUsers = await _TestingAndLearningCollection.find();
        res.json({
            Message: 'All Data Found Successfully',
            Data: true,
            Result: _GetALlUsers
        })
    } catch (error) {
        res.json({
            Message: error.message,
            Data: false,
            Result: null
        })
    }
}

const GetUserById = async (req, res) => {
    try {
        const _GetUserId = req.params._UserId;
        const _GetUserDataById = await _TestingAndLearningCollection.findById(
            { _id: _GetUserId },
        );

        if (_GetUserDataById !== null) {
            res.json({
                Message: "Data Found Successfully",
                Data: true,
                Result: _GetUserDataById
            })
        }
        if (_GetUserDataById === null) {
            res.json({
                Message: "Data Not Found",
                Data: false,
                Result: null
            })
        }

    } catch (error) {
        res.json({
            Message: error.message,
            Data: false,
            Result: null
        })
    }
}


const UpdateById = async (req, res) => {
    try {
        const _GetUserId = req.params._UserId;
        const _GetUserName = req.body.Name;
        const _UpdateUserById = await _TestingAndLearningCollection.updateOne(
            { _id: _GetUserId },
            { Name: _GetUserName }
        );
        if (_UpdateUserById.modifiedCount === 1) {
            res.json({
                Message: 'UpdateSuccessFully',
                Data: true,
                Result: _UpdateUserById
            })
        }

        if (_UpdateUserById.modifiedCount !== 1) {
            res.json({
                Message: 'Not Updated',
                Data: false,
                Result: null
            })
        }

    } catch (error) {
        res.json({
            Message: error.message,
            Data: false,
            Result: null
        })
    }
}

const RemoveUserById = async (req, res) => {
    try {
        const _GetUserId = req.params._UserId;
        const _RemoveUserById = await _TestingAndLearningCollection.deleteOne(
            { _id: _GetUserId }
        );
        res.json({
            Message: 'Deleted Successfully',
            Data: true,
            Result: _RemoveUserById
        })
    } catch (error) {
        res.json({
            Message: error.message,
            Data: null,
            Result: null
        })
    }
}

const RemoveAllCollection = async (req, res) => {
    try {
        const _RemoveAllCollection = await _TestingAndLearningCollection.deleteMany();
        res.json({
            Message: 'All collection has removed successfully',
            Data: true,
            Result: _RemoveAllCollection
        })
    } catch (error) {
        res.json({
            Message: error.message,
            Data: null,
            Result: null
        })
    }
}

module.exports = { MyFirstApiContorller, UpdateUser, GetAllUsersFromTestCollection, GetUserById, UpdateById, RemoveUserById, RemoveAllCollection };




// const _RegisterAdmin = new _AdminManagementRegisterModel({
//     Name: req.body.fname,
//     Email: req.body.email,
//     Mobile: req.body.mobile,
//     Password: req.body.password,
//     Address: req.body.address
// });
// await _RegisterAdmin.save();
// res.json({
//     Message:`User Register Successfully`,
//     Status:1,
//     Data:true
// })





// const UpdateUserEarnings = async (req, res) => {
//     try {
//         const _UserId = req.body._Id;
//         const _UpdateEarnings = await _UserCluster.updateOne({ _id: _UserId }, { $inc: { Earnings: 4 } });
//         const _GetUpdatedUser = await _UserCluster.findById({ _id: _UserId });
//         res.json({
//             Message: `Updated Successfully`,
//             Data: true,
//             Result: _GetUpdatedUser,
//         })
//     } catch (error) {
//         res.json({
//             Error: error.message,
//             Data: false,
//             Result: null
//         })
//     }
// }




// const GetUserById = async (req, res) => {
//     try {
//         const _GetId = req.params._Id;
//         const _GetUserById = await _UserCluster.findById({ _id: _GetId });
//         if (_GetUserById === null) {
//             return res.json({
//                 Message: `No Users Found in your Database`,
//                 Data: false,
//                 Result: null
//             })
//         }
//         if (_GetUserById !== null) {
//             return res.json({
//                 Message: `Found All Users`,
//                 Data: true,
//                 Result: _GetUserById
//             })
//         }
//     } catch (error) {
//         res.json({
//             Error: error.message,
//             Data: false,
//             Result: null
//         })
//     }
// }


// const DeleteUser = async (req, res) => {
//     try {
//         const _GetId = req.params._Id;
//         const _RemoveDocumentFromCollection = await _UserCluster.remove({ _id: _GetId });
//         res.json({
//             Message: 'Removed Successfully',
//             Data: true,
//             Result: _RemoveDocumentFromCollection
//         })
//     } catch (error) {
//         res.json({
//             Message: error.message,
//             Data: false,
//             Result: null
//         })
//     }
// }
