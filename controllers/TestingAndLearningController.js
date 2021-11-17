//call model here
const _TestingAndLearningCollection = require('../models/UserModel');

// const TestController = async (req,res) =>{
//    try {
       
//    } catch (error) {
       
//    }
// }



const MyFirstApiContorller = async(req,res) =>{
    try {
       //Creat a varibale in which you Add data from the req
       const _TestingVariableToStoreInDataBase = new _TestingAndLearningCollection({
           Name:req.body.Name,
           MobileNumber:req.body.MobileNumber,
           Address:req.body.Address,
       });

      const _Result =  await _TestingVariableToStoreInDataBase.save();

       res.json({
           Message:'Added Successfully',
           Data:true,
           Result:_Result
       })
       //Save that variable into the database
       //if Saved send a message " You have saved the data"
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }

}

const UpdateUser = async (req,res) => {
    try {
        const _GetUserId = req.params._UserId;
        const _UpdateUser = await _TestingAndLearningCollection.updateOne(
            {_id:_GetUserId},
            req.body
            )
            res.json({
                Message:'Update Successfully',
                Data:true,
                Result:_UpdateUser
            })
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }
}
module.exports = { MyFirstApiContorller, UpdateUser };




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
