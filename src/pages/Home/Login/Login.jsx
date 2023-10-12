import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../firebase/firebase.config";

const Login = () => {

    const {logIn} = useContext (AuthContext)
    const location = useLocation () ;
    const navigate = useNavigate() ;

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    
    const providerFb = new FacebookAuthProvider();



    const handleLogin = e => {
        e.preventDefault()

        const email = e.target.email.value ;
        const password = e.target.password.value ;

        logIn( email , password) 
        .then (result => {
            console.log (result.user)
            navigate (location?.state ? location.state : '/')
        })
        .catch (error => {
            console.error (error)
        })        
    }
 
    const handleGoogleLogin =  () => {
        
        signInWithPopup (auth , provider)
        .then(result => {
            const user = result.user ;
            console.log (user)

            navigate (location?.state ? location.state : '/')
        })
        .catch (error => {
            console.error (error)
        })        
    }

    const handleFbeLogin =  () => {
        
        signInWithPopup (auth , providerFb)
        .then(result => {
            const user = result.user ;
            console.log (user)

            navigate (location?.state ? location.state : '/')
        })
        .catch (error => {
            console.error (error)
        })        
    }

    return (
        <div>
            <div className=" bg-base-200 py-6">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <div className="text-center flex flex-col gap-4 ">
                        <h1 className="text-5xl font-bold">New Here?</h1>
                        <p>Please create an account to avail services.</p>
                        <Link to={"/register"}><button className="btn btn-info">Create An Account</button></Link>
                        <h1 className="text-4xl">OR</h1>
                        <button onClick={handleGoogleLogin} className="btn btn-active">Sign in with Google</button>
                        <button onClick={handleFbeLogin} className="btn btn-info">Sign in with Facebook</button>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;