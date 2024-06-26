const userModel = require('../models/user')
const getAllUser = async (req, res) => {
    try {
        const users = await userModel.find({})
        res.status(200).json(users)
    }catch(err){
        res.status(500).json(err)
    }
}
const createUser =async(req,res) =>{
    try{
        const user = new userModel(req.body)
        await user.save()
        res.status(200).json({user})
    }catch(err){
        res.status(500).json(err.errmsg)
    }
}
const updateUser =async(req,res)=>{
    console.log("hellloooo",req.params)
    try{
        const user = await userModel.findIdAndUpdate(req.params.id,req.body)
        if(!user){
            res.status(404).json({message : "user not found"})
        }
    }catch(err){
        res.status(500).json(err)
    }
}
module.exports = {getAllUser,createUser,updateUser}