

const TestController = async (req,res) =>{
    res.json({
        Message:`You have succcessfull Reached the testing Controller`
    })
}

module.exports = { TestController };