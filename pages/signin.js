import Head from 'next/head'
import Link from 'next/Link'
const SignIn = () => {
    return (
        <div>
            <Head>
            <title>SignIn</title>  
            </Head>
            <form className="mx-auto my-4" style={{maxWidth: '500px'}}>
            <div className="form-group">
                <label htmlFor="SignInputEmail">Email address</label>
                <input type="email" className="form-control" id="SignInputEmail" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="SignInputPassword">Password</label>
                <input type="password" className="form-control" id="SignInputPassword" />
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
