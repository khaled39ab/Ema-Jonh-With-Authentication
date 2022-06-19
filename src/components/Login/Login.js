import { Button } from 'bootstrap';
import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const [validated, setValidated] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState('');

    return (
        <div className='logIn-container p-4 m-4 w-50 mx-auto'>
            <h2 className='text-center text-info'>Please Log In</h2>
            <Form noValidate validated={validated}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
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