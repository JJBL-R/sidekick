import React from 'react'

const UserInfoForm = () => {
   

    const handleAddUserInfo = (e:any) => {
        let newCity = e.target[0].value;
        let newZipCode = e.target[1].value;
        let newSport = e.target[2].value;
        let newBio = e.target[3].value;
        let newPhoto = e.target[4].value;

        console.log(newPhoto);
        console.log(e);

        e.preventDefault();
        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                city: newCity,
                zipCode: newZipCode,
                sport: newSport,
                bio: newBio,
                photo: newPhoto,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Successfuly added', data);
            })
            .catch((err) => {
                console.log('addUser error front', err);
            });
    };

  return (
    <div>
      <form onSubmit={handleAddUserInfo}>
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
            type="file"
            required
        />
            <input value="Submit" type="submit"/>
      </form>
    </div>
  )
}

export default UserInfoForm
