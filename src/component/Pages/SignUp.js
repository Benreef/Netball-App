import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordChecker from './PasswordChecker';

const SignUpForm = () => {
  let navigate = useNavigate()
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePassword = event => {
    let enteredPassword = event.target.value
    setPassword(enteredPassword)
    }
  
  // const showPassword = event => {
  //   let checked = event.target.checked
  //   if (checked) {
  //     setInputType("text")
  //   }
  // }

  const handleSubmit = event => {
    event.preventDefault();
  
    const data = {
      first_name: firstName,
      email,
      password
    };
  
    fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(() => navigate("/Login", { state: { replace: true } }));
  };

  return (
    <section className='sign-up'>
      <form onSubmit={handleSubmit} id='signupForm'>
        <h2>Sign Up</h2>
        <fieldset>
          <label htmlFor='firstName'>First Name: </label>
          <input
            type='text'
            name='first_name'
            id='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='email'>Email: </label>
          <input
            type='text'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password: </label>
          <PasswordChecker  />
          
          {/* <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> */}
        </fieldset>
        <button type='submit'>
          Sign Up
        </button>
        <p>Already have an account? <a href="/Login">Click Here To Log In</a></p>

      </form>
    </section>
  );
};


















export default SignUpForm;

