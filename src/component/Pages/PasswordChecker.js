import React, { useState } from 'react'

function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false)

  const getPasswordStrenght = (password) => {
    let score = 0;
    const passwordInfo = {
      score: score,
      hasLowerCase: false,
      hasUpperCase: false,
      hasNumber: false,
      hasNonAlphaNumeric: false,
      isOver8Char: false,
      isOver12Char:false
    }
    if(password.match(/[a-z]/)) {
      passwordInfo.hasLowerCase = true
      score++
    }
    if(password.match(/[A-Z]/)) {
      passwordInfo.hasUpperCase = true
      score++
    }
    if(password.match(/[0-9]/)) {
      passwordInfo.hasNumber = true
      score++
    }
    if(password.match(/[^a-zA-Z0-9]/)) {
      passwordInfo.hasNonAlphaNumeric = true
      score++
    }
    if(password.length >= 8) {
      passwordInfo.isOver8Char = true
      score++
    }
    if(password.length >= 12) {
      passwordInfo.isOver12Char = true
      score++
    }
    passwordInfo.score = score
    return passwordInfo
  }
  console.log(getPasswordStrenght("cakePudd1ng"))

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value
    setPassword(newPassword)
  }
  const passwordStrengthInfo = getPasswordStrenght(password)

  let message = ''
  if (password.length > 0) {
    if (passwordStrengthInfo.score <= 1) {
      message = 'Weak Sauce'
    } else if (passwordStrengthInfo.score === 6) {
      message = 'Pain in the butt to remember and type'
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }  

  return (
    <div>
    <input type={showPassword ? 'text' : 'password'}
    value={password}
   
    onChange={handlePasswordChange} 
    />
    <input type="checkbox" 
    checked={showPassword}
    onChange={handleShowPassword}
    
    />
    <span>Show Password</span>
    <p>{message}</p>
    </div>
  )
}


export default PasswordChecker
