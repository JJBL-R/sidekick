import React, {useState, useEffect} from 'react';
import {useSwipeable} from 'react-swipeable';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Test from '../SwipeRight';
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import './UserProfileStyles.css';
// @ts-ignore
// import { Gradient } from '../../pages/Landing/Gradient.js';


const UserProfile = () => {

  // const gradient = new Gradient();
  
  // useEffect(() => {
  //   gradient.initGradient('.gradient-canvas');
  // });


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
    <div className='userProfile'>
        {/* <canvas className='gradient-canvas' data-transition-in />  */}
        <img className='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kobe_Bryant_2014.jpg/640px-Kobe_Bryant_2014.jpg'></img>
        <h1 className='name'>Brian Yang, 25</h1>
        <h2 className='sport'>Basketball 🏀</h2>
        <h2 className='location'>Los Angeles, 90210</h2>
        <p className='bio'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat possimus aliquid saepe rerum sunt! Voluptatum quaerat modi, voluptate, perferendis odio adipisci natus nostrum hic quibusdam porro, sapiente ipsam cupiditate assumenda ea. Explicabo fugiat facere vitae dolorum illum dolor commodi ullam voluptates facilis
          officiis maiores sapiente, tempora earum distinctio quasi voluptate.</p>
    </div>
  )
}

export default UserProfile
