import DBConnection from '../../../database/DBConnection'
import Users from '../../../models/userModel'
import {createAccessToken } from '../../../utils/generateToken'
import jwt from 'jsonwebtoken'

DBConnection()

export default async(req, res) =>{
  
    try {
        const ref_token = req.cookies.refreshtoken;
        if(!ref_token) return res.status(400).json({err : 'Please Login Now !'})

        const result = jwt.verify(ref_token, process.env.REFRESH_TOKEN_SECRET)
        if(!result) return res.status(400).json({err : 'Token is incorrect or has Expired'})
       
        const user = await Users.findById(result.id)
        if(!user) return res.status(400).json({err: 'User does not exist. '})

        const access_token = createAccessToken({id: user._id})
        res.json({
            access_token,
            user: {
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
            root: user.root
        }
        })
    } catch(err) {
        return res.status(500).json({err: err.message})
    }
}