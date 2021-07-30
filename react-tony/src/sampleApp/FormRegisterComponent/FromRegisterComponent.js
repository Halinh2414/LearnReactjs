import React, { useState } from "react";
import styles from './formRegister.module.css'
function FromRegisterComponent() {
  const [errorMessages, setErrorMessages] = useState([]);
  const [showErrors, setShowErrors] = useState(false);
  let errors = [];
  const [forms, setForms] = useState({
    firstName: '',
    lastName: '',
    contactNo:'',
    email:'',
    password: '',
    confirmPass: ''
  });

  function onChangeForms(event) {
    const { name, value } = event.target;
    setForms(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  //validate email input 
  function ValidateEmail(email) {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {return true;}
    return false;
  }
  //validate password input 
  function ValidatePassword(password) {
    if (password.length >= 8 ) {return true;}
    return false;
  }

  function formValidation(){
    setErrorMessages([]);
    const isFirstNameValid = (forms.firstName !== "");
    const isLastNameValid = (forms.lastName !== "");
    const isContactNo = ( forms.contactNo!== "");
    const isPassword = (forms.password !== "");
    const isConfirmPass = (forms.password === forms.confirmPass );
    if (!isFirstNameValid) {
      errors.push("First Name is not valid, please try again.");
    }
    if (!isLastNameValid) {
      errors.push("Last Name is not valid, please try again.");
    }
    if (!ValidateEmail(forms.email)) {
      errors.push("Email is not valid, please try again.");
    }
    if (forms.email === "") {
      errors.push("Email field is empty, please try again.")
    }
    if (!isContactNo) {
      errors.push("Contact No is not valid, please try again.");
    }
    if (!isPassword) {
      errors.push("Password is not valid, please try again.");
    }
    if (!ValidatePassword(forms.password)){
      errors.push("Password must be longer than 8 characters");
    }
    if (!isConfirmPass) {
      errors.push("Confirm password must be same as password, please try again.");
    }
    if (errors.length > 0) {
      setShowErrors(true);
      setErrorMessages(errors);
    } 
    else {
      setShowErrors(false);
      alert("register succesful")
    }
  };

  return(
    <div className={styles.container}>
      <div className={styles.header}>
        <h6>
          Register
        </h6>
      </div>
      <form> 
          <p><label>Fisrt Name</label> <input name="firstName" type ="text" onChange = {onChangeForms}/></p>
          <p><label>Last Name</label> <input name="lastName"  type ="email" onChange = {onChangeForms}/></p>
          <p><label>Email</label> <input name="email"  type ="email" onChange = {onChangeForms}/></p>
          <p><label>Contact No</label> <input name="contactNo" type ="text"  onChange = {onChangeForms}/></p>
          <p><label>Password</label> <input name="password" type ="text"  onChange = {onChangeForms}/></p>
          <p><label>Confirm Password</label><input name="confirmPass" type ="text"  onChange = {onChangeForms}/></p>
          <ul className={styles.error}>
            {showErrors ? errorMessages.map((item, index) => {
              return <li key={index}>{item}</li>;}) : null
            }
          </ul>
           <button color="primary" type="button" onClick = {formValidation}>  Submit </button>
      </form>
    </div>
    )
}
export default FromRegisterComponent;