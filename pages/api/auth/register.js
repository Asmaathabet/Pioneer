import DBConnection from '../../../database/DBConnection'
import Users from '../../../models/userModel'
import validate from './validate'

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
    const {name,email, password, cf_password } = req.body
    const errMsg = validate(name,email, password, cf_password)
    if(errMsg) return res.status(400).json({err: errMsg})
}
catch(err) {}
}