import DBConnection from '../../../database/DBConnection'
import Users from '../../../models/userModel'
import validate from './validate'
import bcrypt from 'bcrypt'

DBConnection()
console.log(('hhhhhhhhhhhhhhhhhhhhhh'))
export default async(req, res) =>{
    switch(req.method){
        case "POST":
            await register(req, res)
            break; 
    }
}

const register = async(req, res) =>{
try {
    const {name,email, password, cf_password } = req.body
    console.log(req.body)
    const errMsg = validate(name,email, password, cf_password)
    if(errMsg) return res.status(400).json({err: errMsg})
console.log(('hhhhhhhhhhhhhhhhhhhhhh', req.body))
    const user = await Users.findOne( {email})
    if(user) return res.status(400).json({err: 'This email Already exists'})
    console.log(('hhhhhhhhhhhhhhhhhhhhhh',3333333333333333))

    const HashedPassword = await bcrypt.hash(password, 123)
  console.log(HashedPassword)
    const newUser = new Users({
        name,
        email,
        password: HashedPassword,
        cf_password
    })

    console.log(newUser)
    await newUser.save()
    console.log("Register Succeeded")
    res.json({msg: "Register Succeeded "})
}
catch(err) {
    res.status(500).json({err: err.message})
}
}