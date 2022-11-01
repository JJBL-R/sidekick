import React from 'react'

const UserInfoForm = () => {
  return (
    <div>
      <form>
        <input
            id="city"
            type="text"
            placeholder="City"
            required
        />
         <input
            id="zip"
            type="number"
            placeholder="Zip code"
            required
        />
        <input
            id="sport"
            type="text"
            placeholder="Activity"
            required
        />
         <input
            id="bio"
            type="text"
            placeholder="Bio"
            required
        />
           <input
            id="photo"
            type="image"
            required
        />
      </form>
    </div>
  )
}

export default UserInfoForm
