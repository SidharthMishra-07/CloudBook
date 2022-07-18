import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import './Login.css'

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);

        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Logged In Successfully", "success");
            history.push("/");
        }
        else {
            props.showAlert("Wrong Credentials", "danger");
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <div className='global-container my-5'>
            <div className="card login-form">
                <div className="card-body">
                    <h1 className="card-title text-center">LOGIN</h1>
                    <div className="card-text">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control input-login" value={credentials.email} id="email" name="email" onChange={onChange} aria-describedby="emailHelp" required />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control input-login" value={credentials.password} id="password" name="password" onChange={onChange} required />
                            </div>
                            <div className='d-grid gap-2 col-6 mx-auto'>
                                <button type="submit" className="btn btn-primary btn-block my-3 btnlogin">
                                    Sign In
                                </button>
                            </div>

                            <div className="signup">
                                <p>Don't have an account? <Link to ="/signup">SignUp</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login