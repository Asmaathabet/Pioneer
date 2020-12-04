import Head from 'next/head'
import Link from 'next/Link'
const Register = () => {
    return (
        <div>
            <Head>
            <title>Register</title>  
            </Head>
            <form className="mx-auto my-4" style={{maxWidth: '500px'}}>
            <div className="form-group">
                <label htmlFor="InputName">Name</label>
                <input type="text" className="form-control" id="InputName" aria-describedby="name" />
            </div>
            <div className="form-group">
                <label htmlFor="InputEmail">Email address</label>
                <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="InputPassword">Password</label>
                <input type="password" className="form-control" id="InputPassword" />
            </div>
            <div className="form-group">
                <label htmlFor="InputCPassword">Confirm Password</label>
                <input type="password" className="form-control" id="InputCPassword" />
            </div>
            <button type="submit" className="btn btn-dark w-100" >Login</button>
            <p className="my-2">
               Already have an account? 
                <Link href="/signin"><a style={{color: 'crimson'}} > Login Now</a></Link>
            </p>
            </form>
        </div>    
    )
}
export default Register;
