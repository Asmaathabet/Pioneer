import Head from 'next/head'
import Link from 'next/Link'
import {useState, useContext} from 'react'
import validate from '../utils/validate'
import {DataContext} from '../store/GlobalState'
import { postData } from '../database/fetchData'

const Register = () => {
    const initialState = {name:'', email: '', password: '', cf_password: ''}
    const [userData, setUserData] = useState(initialState)
    const {name, email, password, cf_password} = userData

    const [state, dispatch] = useContext(DataContext); // be sure from destructuring
    // console.log(state)

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUserData({...userData, [name]: value})
    }
    
    const handleSubmit = async e => {
        e.preventDefault()

        const errMsg = validate(name, email, password, cf_password)
        if(errMsg) return dispatch({ type: 'NOTIFY', payload: {error: errMsg}})

        dispatch({ type: 'NOTIFY', payload: {loading: true}})
        
        const res = await postData('auth/register', userData)
        if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err}}) 
        return dispatch({ type: 'NOTIFY', payload: {success: res.msg}})
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
