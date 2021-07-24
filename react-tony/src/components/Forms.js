import React from 'react'

function Forms() {
  const [forms, setForms] = React.useState({
    firstName: '',
    lastName: ''
  })
  const [errors, setErros] = React.useState({
    isFirstName: false,
    isLastName: false
  })

  function onChangeForms(event) {
    const { name, value } = event.target;
    setForms(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  function handleSubmit() {
    if(forms.firstName === '') {
      setErros(prevState => {
        return {
          ...prevState,
          isFirstName : true,
          isLastName: false
        }
      })
    } 
    if(forms.lastName === '' || forms.firstName !== '') {
      setErros(prevState => {
        return {
          ...prevState,
          isLastName: true,
          isFirstName : false,
        }
      })
    }

    if(forms.firstName !== '' && forms.lastName !== '') {
      setErros(prevState => {
        return {
          ...prevState,
          isLastName: false,
          isFirstName : false,
        }
      })
    }
  }
  
  return (
    <div>
      {forms.lastName} {forms.firstName}
      <br />
      FirstName: <input type="text" name="firstName" value={forms.firstName} onChange={onChangeForms} />
      LastName: <input type="text" name="lastName" value={forms.lastName} onChange={onChangeForms} />
      <br />
      {errors.isFirstName && <div>please input firstName</div>}
      {errors.isLastName && <div>please input lastname</div>}

      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Forms
