import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function Login({ setIsLoggedIn, setUserName }) {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const handlePassword = event => {
    let enteredPassword = event.target.value;
    setPassword(enteredPassword);
  };

  const handleLogin = event => {
    event.preventDefault();

    const data = { email: email, password: password };
    console.log('data being returned', password)

    fetch('/api/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        setIsLoggedIn(true);
        setUserName(res.email);
      })
      .then(() => navigate("/", { replace: true }));
  };
  
  return (
    <section className='login'>
    <form onSubmit={handleLogin} id='loginForm'> 
        <h2>Log in</h2>
        <fieldset>
          <label htmlFor='email'>Email: </label>
          <input
            type='text'
            required
            name='email'
            id='email'
            value={email}
            onChange={handleEmail}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password: </label>
          <input
            type="password"
            required
            name="password"
            onChange={handlePassword}
          />
        </fieldset>
        <button className='login-btn' type='submit' onClick={handleLogin}>Log In</button>
      </form>
      <p>Don't have an account? <a href="/SignUp">Click Here To Sign Up</a></p>
    </section>
  );
}

export default Login;
