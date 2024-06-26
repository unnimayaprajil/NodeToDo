const express = require('express')
const { getAllUser, createUser, updateUser } = require('../controllers/userController')

const userRouter = express.Router()
userRouter.get('/',getAllUser)
userRouter.post('/',createUser)
userRouter.put('/:id',updateUser)
module.exports = userRouter