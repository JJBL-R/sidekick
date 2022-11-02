import React, {useState, useEffect} from 'react';
import {useSwipeable} from 'react-swipeable';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Test from '../Test';
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';



const UserProfile = () => {


const [profile, setProfile] = useState({});


// const getData = () => {
//     fetch()
//     .then(res => res.json())
//     .then((respdata) => {
//     setProfile(respdata)
//     // respdata = {name: dfsdf sport : soccer}
//     })
//     .catch((err) => {     
//     })
// }

// useEffect(() => {
//     getData();
// }, []);




  return (
    <div className='testing'>
      <h1>UserProfile</h1>
      <p>Bio</p>
    </div>
  )
}

export default UserProfile
