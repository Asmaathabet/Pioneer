import DBConnection from '../../../database/DBConnection'
import Users from '../../../models/userModel'
import bcrypt from 'bcrypt'

DBConnection()
export default async(req, res) =>{
    switch(req.method){
        case "POST":
            await login(req, res)
            break; 
    }
}

const login = async(req, res) =>{
try {
    const { email, password } = JSON.parse(req.body)
    
    const user = await Users.findOne({email})
    if(!user) return res.status(400).json({err: 'This user does not exist.'})
  
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) return res.status(400).json({err: 'Incorrect Password.'})
    
    res.json({msg: "Login Succeeded "})
}
catch(err) {
    res.status(500).json({err: err.message})
}
}