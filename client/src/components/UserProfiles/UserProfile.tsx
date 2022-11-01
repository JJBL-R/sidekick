import React, {useState, useEffect} from 'react';

const UserProfile = () => {

const [profile, setProfile] = useState([]);

const getData = () => {
    fetch()
    .then(res => res.json())
    .then((respdata) => {
    setProfile(respdata)
    })
    .catch((err) => {     
    })
}

useEffect(() => {
    getData();
}, []);

  return (
    <div>
      
    </div>
  )
}

export default UserProfile
