const db=[
    {
        name:"Camila",
        email:"camila@outlook.com",
    }
]

export class UserService {
    createUser = (name:string, email:string)=>{
        const user ={
            name,
            email
        }
        db.push(user)
        console.log('DB atualizado', db);
    }

    getAllUsers = ()=>{
        return db
    }

    deleteUser = (index:number)=>{
        db.splice(index,1)
        console.log('DB atualizado', db);
    }
}