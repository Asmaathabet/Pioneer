import DBConnection from '../../../database/DBConnection'
import Users from '../../../models/userModel'
import validate from './validate'
import bcrypt from 'bcrypt'

DBConnection()
export default async(req, res) =>{
    switch(req.method){
        case "POST":
            await register(req, res)
            break; 
    }
}

const register = async(req, res) =>{
try {
    const { name,email, password, cf_password } = JSON.parse(req.body)
    const errMsg = validate(name,email, password, cf_password)
    if(errMsg) return res.status(400).json({err: errMsg})
    const user = await Users.findOne( {email})
    if(user) return res.status(400).json({err: 'This email Already exists'})


    const HashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new Users({
        name,
        email,
        password: HashedPassword,
        cf_password
    })
    await newUser.save()
    console.log("Register Succeeded")
    res.json({msg: "Register Succeeded "})
}
catch(err) {
    res.status(500).json({err: err.message})
}
}