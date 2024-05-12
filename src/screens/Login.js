import React, { useState } from 'react';
import '../screens/Login.css';
import Restaurent from '../component/basics/Restaurent'

const Login = ({ onSubmit }) => {

  const[signal,setSignal]= useState(false);
  const [error,setError]= useState(false);
  const [formData, setFormData] = useState({
  
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Trigger validation for the changed field
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const validationErrors = { ...errors };

    // Perform validation based on the field name
    switch (name) {
    case 'email':
      if (!/[a-zA-Z]/.test(value)) {
        validationErrors[name] = 'Invalid email address';
      } else {
        delete validationErrors[name];
      }
      break;
      case 'password':
        if (value.length < 3) {
          validationErrors[name] = 'At least 3 characters';
        } else if (!/\d/.test(value)) {
          validationErrors[name] = 'At least one number';
        } else if (!/[a-zA-Z]/.test(value)) {
          validationErrors[name] = 'At least one letter';
        } else {
          delete validationErrors[name];
        }
        break;
      default:
        break;
      }

    setErrors(validationErrors);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email==="sidhubhai1997@gmail.com" && formData.password==='sid123'){
      setSignal('true');
    }
    else {
      setErrors('true');
    }
    }
if (signal){
  return <Restaurent/>
}

  return (
    <form onSubmit={handleSubmit}>
     
    <div className='container'>
        <div className='tiger'>
      <div className="containerinside">
        <h1>Login</h1>
        <p>More than 500 recipes from around the world!</p>
      </div>
      
      <div className='innerdiv'>
        <input className="five" type='text' name='email'  placeholder='Enter Email Address'  value={formData.email} onChange={handleChange} /><br />  {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        <input className="fivetwo"  type='text' name='password' placeholder='Password' value={formData.password} onChange={handleChange}/> {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}<br />

        <label>
          <input type='checkbox' className='remember-me' /> Remember Me
        </label>
        <a id='fpass' href=''>Forgot password</a><br />

        <div className='buttonlogin'> 
        <button type="submit">Login</button>
        </div>
        
        <p className="para">Login with</p>
        <hr />
        <div className="last">
          <a href='https://facebook.com'>
            <i className="fab fa-facebook"></i>
          </a>
          <a href='https://google.com'>
            <i className="fab fa-google"></i>
          </a>
          <a href='https://twitter.com'>
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      </div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
    </div>
    </form>
    );
  }
  export default Login

