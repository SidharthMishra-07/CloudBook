import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import './signup.css'

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json();
        console.log(json);

        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            history.push("/");
            props.showAlert("Account Created Successfully", "success");
        }
        else {
            props.showAlert("Invalid Credentials", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='global-container my-2'>
            <div className="card login-form-signup">
                <div className="card-body">
                    <h1 className="card-title text-center">SIGN-UP</h1>
                    <div className="card-text">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group signup-body my-3">
                                <label htmlFor="name" className="form-label">Name </label>
                                <input type="text" className="form-control input-login" value={credentials.name} id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group signup-body my-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control input-login" value={credentials.email} id="email" name="email" onChange={onChange} aria-describedby="emailHelp"/>
                            </div>
                            <div className="form-group signup-body my-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control input-login" value={credentials.password} id="password" name="password" onChange={onChange} minLength={5} />
                            </div>
                            <div className="form-group signup-body my-3">
                                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control input-login" value={credentials.cpassword} id="cpassword" name="cpassword" onChange={onChange} minLength={5} />
                            </div>
                            <div className='d-grid gap-2 col-6 mx-auto'>
                                <button type="submit" className="btn btn-primary btn-block my-3 btnlogin">
                                    Sign Up
                                </button>
                            </div>

                            <div className="signup">
                                <p>Already have an account? <Link to="/login">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup