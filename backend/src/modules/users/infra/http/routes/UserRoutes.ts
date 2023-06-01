import express from 'express'

//user controller
import { UserController } from '../controllers/UserController'

const app = express.Router()
const userController:UserController = new UserController()

//Get
export const getFindAllUserRoute = app.get('/',userController.getFindAllUser)
export const getFindByIdUserRoute = app.get('/:id',userController.getFindByIdUser)
export const getFindByUsernameUserRoute = app.get('/findByUsername/:username',userController.getFindByUsernameUser)

//Post
export const postCreateUserRoute = app.post('/create',userController.postCreateUser)