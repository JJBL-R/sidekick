import React, {useState, useEffect} from 'react';

const UserProfiles = () => {

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

export default UserProfiles
