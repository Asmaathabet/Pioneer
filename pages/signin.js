import Head from 'next/head'
import Link from 'next/Link'
import {useState, useContext} from 'react'
import {DataContext} from '../store/GlobalState'
import { postData } from '../database/fetchData'
import Cookie from 'js-cookies'

const SignIn = () => {
   const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password} = userData

    const [state, dispatch] = useContext(DataContext); // be sure from destructuring
    // console.log(state)

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUserData({...userData, [name]: value})
    }
    
    const handleSubmit = async e => {
        e.preventDefault()

        dispatch({ type: 'NOTIFY', payload: {loading: true}})
        
        const res = await postData('auth/login', userData)
        if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err}}) 
        dispatch({ type: 'NOTIFY', payload: {success: res.msg}})
        
        dispatch({ type: 'AUTH', payload: {
            token: res.access_token,
            user: res.user
        }})

        Cookie.setItem('refreshtoken', res.refresh_token, {
            path: 'api/auth/accessToken',
            expires: 7
        })

        localStorage.setItem('firstLogin', true)
    }

    return (
        <div>
            <Head>
            <title>SignIn</title>  
            </Head>
            <form className="mx-auto my-4" style={{maxWidth: '500px'}} onSubmit ={handleSubmit}>
            <div className="form-group">
                <label htmlFor="SignInputEmail">Email address</label>
                <input
                    type="email" 
                    className="form-control" 
                    id="SignInputEmail" 
                    aria-describedby="emailHelp"
                    name="email"
                    value ={email}
                    onChange={handleChangeInput} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="SignInputPassword">Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="SignInputPassword"
                    name="password"
                    value ={password}
                    onChange={handleChangeInput} />
            </div>
            <button type="submit" className="btn btn-dark w-100" >Login</button>
            <p className="my-2">
                you don't have an account? 
                <Link href="/register"><a style={{color: 'crimson'}} > Register Now </a></Link>
            </p>
            </form>
        </div>    
    )
}
export default SignIn;
