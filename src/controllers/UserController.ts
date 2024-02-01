import {Request, Response} from 'express';
import { UserService } from '../services/UserService';


export class UserController {
    createUser = (request: Request, response: Response) => {
        const userService = new UserService()
        const user = request.body

        if (!user.name || !user.email){
            return response.status(400).json({message: 'bad request: Nome e email obrigatórios'})
        }

        userService.createUser(user.name, user.email)
        return response.status(201).json({message:'usuario criado'})
    }

    getAllUsers = (request: Request, response: Response)=>{
        const userService = new UserService()
        const users = userService.getAllUsers()
        return response.status(200).json(users)
    }

    deleteUser = (request:Request, response:Response) =>{
        const userService = new UserService()
        const users = userService.getAllUsers()
        const index = request.body.index

        userService.deleteUser(index)
        return response.status(200).json(users)

    }
}