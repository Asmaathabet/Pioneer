import Head from 'next/head'
import Link from 'next/Link'
import {useState} from 'react'
import validate from './api/auth/validate'

const Register = () => {
    const initialState = {name:'', email: '', password: '', cf_password: ''}
    const [userData, setUserData] = useState(initialState)
    const {name, email, password, cf_password} = userData
    
    const handleChangeInput = e => {
        const {name, value} = e.target
        setUserData({...userData, [name]: value})
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        // console.log(userData)
        const errMsg = validate(name, email, password, cf_password)
        if(errMsg) console.log(errMsg)

    }


    return (
        <div>
            <Head>
            <title>Register</title>  
            </Head>
            <form className="mx-auto my-4" style={{maxWidth: '500px'}} onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="InputName">Name</label>
                <input 
                type="text" 
                className="form-control"
                id="InputName" 
                aria-describedby="name"
                name = "name" 
                value ={name} 
                onChange={handleChangeInput}
                />
            </div>
            <div className="form-group">
                <label htmlFor="InputEmail">Email address</label>
                <input 
                type="email"
                className="form-control"
                id="InputEmail" 
                aria-describedby="emailHelp"
                name = "email" 
                value ={email} 
                onChange={handleChangeInput} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="InputPassword">Password</label>
                <input
                type="password" 
                className="form-control" 
                id="InputPassword"
                name = "password" 
                value ={password} 
                onChange={handleChangeInput} />
            </div>
            <div className="form-group">
                <label htmlFor="InputCPassword">Confirm Password</label>
                <input 
                type="password" 
                className="form-control" 
                id="InputCPassword" 
                name = "cf_password" 
                value ={cf_password} 
                onChange={handleChangeInput}/>
            </div>
            <button type="submit" className="btn btn-dark w-100" >Register</button>
            <p className="my-2">
                Already have an account? 
                <Link href="/signin"><a style={{color: 'crimson'}} > Login Now</a></Link>
            </p>
            </form>
        </div>    
    )
}
export default Register;
