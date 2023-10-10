import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";



const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password)

        // create user 
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div>
            <div className=" bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <label className=" text-center">
                            <h1 className="text-5xl my-8">Sign Up Now</h1>
                            <p>Already have an account?
                                Then please <Link className="text-blue-600 font-bold" to={"/login"}>Sign In</Link></p>
                        </label>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                            </div>
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

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;