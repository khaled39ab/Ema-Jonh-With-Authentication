import React from 'react';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignUp.css';

const SignUp = () => {
    const [validated, setValidated] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState('');
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const handleNameBlur = () => {
        setName(firstName + ' ' + lastName);
    }

    const handleFirstNameBlur = e => {
        setFirstName(e.target.value);
    }

    const handleLastNameBlur = e => {
        setLastName(e.target.value)
    }

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value)
    }

    const handlePhoneBlur = e => {
        setPhone(e.target.value)
    }

    const handleCityBlur = e => {
        setCity(e.target.value)
    }

    const handleCreateUser = e => {
        handleNameBlur();
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        setValidated(true);


        if (password !== confirmPassword) {
            setError('Confirm password did not match')
        }

        if (!/(?=.{6,})(?=.*[!#$%&@? "])/.test(password)) {
            setError('Password should minimum 6 character with 1 special character.')
            return;
        }
    }

    return (
        <div className='signUp-container w-50 p-4 m-4 mx-auto'>
            <h1 className='reg-title text-center mb-4'>Want to Registration!</h1>
            <Form noValidate validated={validated} >
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control onBlur={handleFirstNameBlur}
                            required
                            type="text"
                            placeholder="First name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control onBlur={handleLastNameBlur}
                            required
                            type="text"
                            placeholder="Last name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group as={Col} controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    <Form.Text className="text-muted">
                        Password should minimum 6 character with 1 special character.
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicPassword02">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} md="8" controlId="validationCustom03">
                        <Form.Label>Contact Number:</Form.Label>
                        <Form.Control onBlur={handlePhoneBlur}
                            required
                            type="text"
                            placeholder="Phone No"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom05">
                        <Form.Label>City</Form.Label>
                        <Form.Control onBlur={handleCityBlur} type="text" placeholder="City" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                {
                    error ? <p className='text-danger'>{error}</p> : <p className='text-success'>{submitted}</p>
                }

                <div className='btn-container mt-4'>
                    <Button onClick={handleCreateUser} type="submit">Sign Up</Button>
                    <div className='logIn-sec'>
                        <p>Already have an account?</p>
                        <div>
                            <Link to={'/login'}>
                                <button>Log In</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default SignUp;