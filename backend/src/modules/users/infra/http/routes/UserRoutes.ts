import express,{Handler} from 'express'

//user controller
import { UserController } from '../controllers/UserController'

const app = express.Router()
const userController:UserController = new UserController()


export const getFindAllUserRoute = app.get('/findAll',userController.getFindAllUser)
export const getFindByIdUserRoute = app.get('/:id',userController.getFindByIdUser)