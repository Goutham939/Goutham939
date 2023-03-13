// import React, { useState } from "react";
// import '../src/Registration.css';
// import { useCookies } from "react-cookie";

// export const Register = (props) => {
    
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [name, setName] = useState('');
//     // const [gender, setGender] = useState('');
//     const [birthDay, setBirthday] = useState('');

//     const [formErr, setFormErr] = useState('');
//     const [cookies, setCookie] = useCookies(['user']);
    


//     const validateForm = () =>{
//         let err ={}

//         if(name===''){
//             err.name = "Fullname is requried!"
//         }
//         if(email===''){
//             err.email = "Email is requried!"
//         }
//         if(pass===''){
//             err.pass = "Password is requried!"
//         }
//         // if(gender===''){
//         //     err.gender = "Gender is requried!"
//         // }
//         if(birthDay===''){
//             err.birthDay = "Date of Birth is requried!"
//         }


//         setFormErr({...err})
//         return false;
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         setCookie('Name', name, { path: '/' });
//         setCookie('Password', pass, { path: '/' });
//         setCookie('Email', email, {path: '/'})
//         // setCookie('Gender', gender, { path: '/'})
//         setCookie('BirthDay', birthDay, { path: '/'})
//         console.log(email,pass, name,  birthDay);
//         let isValid = validateForm()
//         console(isValid)
//     }

//     return (
//         <div className="auth-form-container">
//             <h2>Register</h2>
//         <form className="register-form" onSubmit={handleSubmit}>
//             <label htmlFor="name">Full name</label>
//             <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
//             <span className="clr">{formErr.name}</span>

//             <label htmlFor="email">email</label>
//             <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//             <span className="clr">{formErr.email}</span>

//             <label htmlFor="password">password</label>
//             <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//             <span className="clr">{formErr.pass}</span>

//             {/* <label htmlFor="gender">Gender</label>
//             <input type='radio' value={gender} onChange={(e) => setGender(e.target.value)} id='gender' name="gender" />Male
//             <input type='radio' value={gender} onChange={(e) => setGender(e.target.value)} id='gender' name="gender"  />Female
//             <span className="clr">{formErr.gender}</span> */}


           

//             <label htmlFor="birthday">Birthday</label>
//             <input type='date' placeholder="birthday" name="birthday" onChange={(e) => setBirthday(e.target.value)} value={birthDay}  />
//             <span className="clr">{formErr.birthDay}</span>

//             <button className="btn1" type="submit">Register</button>
//             <p>Registration is Successfull</p>
//         </form>
//         <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Already have an account? Login here.</button>


//     </div>
//     )
// }


// import React, { useState } from 'react';
// import { useCookies } from 'react-cookie';

// const RegistrationForm = () => {
//   const [cookies, setCookie] = useCookies(['registrationData']);

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setCookie('registrationData', formData, { path: '/' });
//     console.log('Registration data stored in cookies:', cookies.registrationData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegistrationForm;

import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const RegistrationForm = () => {
  const [cookies, setCookie] = useCookies(['registrationData']);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;
    if (!formData.name.trim()) {
      formIsValid = false;
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      formIsValid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      errors.email = 'Email is invalid';
    }
    if (!formData.password.trim()) {
      formIsValid = false;
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      formIsValid = false;
      errors.password = 'Password should be at least 6 characters';
    }
    if (!formData.confirm_password.trim()) {
      formIsValid = false;
      errors.confirm_password = 'Confirm password is required';
    } else if (formData.password !== formData.confirm_password) {
      formIsValid = false;
      errors.confirm_password = 'Passwords do not match';
    }
    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setCookie('registrationData', formData, { path: '/' });
      console.log('Registration data stored in cookies:', cookies.registrationData);
    } else {
      console.log('Form is invalid');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
        {errors.name && <div className="error">{errors.name}</div>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>
      <div>
        <label htmlFor="confirm_password">Confirm Password:</label>
        <input type="password" id="confirm_password" name="confirm_password" value={formData.confirm_password} onChange={handleInputChange} />
        {errors.confirm_password && <div className="error">{errors.confirm_password}</div>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};
export default RegistrationForm;



