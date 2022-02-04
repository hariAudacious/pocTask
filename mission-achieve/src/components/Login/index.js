import React, { useState } from 'react';
import Styles from "./styles.module.scss"
const LogIn = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });
  const [formErrors, setFormErrors] = useState({});


  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormValues({ ...formValues, [name]: value });
  };
  // console.log(formValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formValues);
    setFormErrors(validate(formValues))
  };

  const validate = (values) => {
    //  console.log(values.firstName);
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;


    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length >20 ) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };



  return  <div className={Styles.container}>

    <form onSubmit={handleSubmit} >
    <h4 className={Styles.Heading}>LogIn Here</h4>

   <div> 
      <div className="input-group mb-3">
        <input type="text" value={formValues.email} name='email' onChange={handleChange} className="form-control" placeholder='Email' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>
      <p>{formErrors.email}</p>

      <div className="input-group mb-3">
        <input type="text" value={formValues.password} name='password' onChange={handleChange} className="form-control" placeholder='password' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>
      <p>{formErrors.password}</p>


      <div>
        <button className={Styles.button} >Login</button>
      </div>
  </div>   
    </form>
  </div>
};

export default LogIn;
