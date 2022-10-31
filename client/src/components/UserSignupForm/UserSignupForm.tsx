import React from 'react'

const UserSignupForm = () => {

    function handleSubmit (e) {
        e.preventDefault();
        if()
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
            id="first name"
            type="text"
            placeholder="First Name"
            required
        />
        <input
            id="last name"
            type="text"
            placeholder="Last Name"
            required
        />
        <input
            id="age"
            type= "date"
            placeholder="Date Of Birth"
            required
        />
        <input 
            id="email"
            type= "email"
            placeholder="Email"
            required
        />
          <input 
            id="password"
            type= "text"
            placeholder="Password"
            required
        />
            <input value="Next" type="submit" />
      </form>
    </div>
  )
}

export default UserSignupForm
