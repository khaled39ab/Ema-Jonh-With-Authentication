import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = e =>{
        setEmail(e.target.value)
    }

    const handlePasswordBlur = e =>{
        setPassword(e.target.value)
    }

    if (user) {
        navigate(from, {replace : true})
    }
    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            setValidated(true);
            return;
        }

        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='logIn-container p-4 m-4 w-50 mx-auto'>
            <h2 className='text-center text-info'>Please Log In</h2>
            <Form noValidate validated={validated} onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                    </Form.Control.Feedback>
                </Form.Group>

                {
                    error ? <p className="text-danger">{error}</p> : <p className='text-success'>{submitted}</p>
                }

                <Button variant="primary" type="submit">
                    Log in
                </Button>
                <Button variant="link">Forget Password?</Button>
                <hr />
            </Form>
            <div className='create-btn-sec'>
                <Link to={'/signUp'}>
                    <Button>
                        Create An Account
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Login;