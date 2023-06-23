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
    const data = {email, password}
    console.log({email, password})
    console.log('pre fetch')
    fetch('/api/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log(res.json())
        return res.json()
      })
      .then(res => {
        setIsLoggedIn(true);
        setUserName(res.email);
        console.log('login?') 
      })
      .then(() => navigate("/", { replace: true }));
  };

  return (
    <section className='login'>
      <form onSubmit={handleEmail} id='loginForm'>
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
        <Link to='/' className='login-btn' type='submit' onClick={handleLogin}>Log In</Link>
      </form>
      <p>Don't have an account? <a href="/SignUp">Click Here To Sign Up</a></p>
    </section>
  );
}

export default Login;
