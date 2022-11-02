//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Test from '../Swipes/SwipeRight';
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import './UserProfileStyles.css';

const UserProfile = () => {
  const [user, setUser] = useState();

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetch('/user')
      .then((res) => res.json())
      .then((data) => {
        setUser(data.rows[Math.floor(Math.random() * data.rows.length)]);
      });
  }, []);

  return (
    user && (
      <div className="userProfile">
        {/* <img
        className="image"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kobe_Bryant_2014.jpg/640px-Kobe_Bryant_2014.jpg"
      ></img>
      <div className='innerPic'>
      <h1 className="name">Brian Yang, 25</h1>
      <h2 className="sport">Basketball</h2>
      <h2 className="location">Los Angeles, 90210</h2>
      </div>
      <div className="bioContainer">
      <h3 className="bioTitle">Bio</h3>
      <p className="bio">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
        possimus aliquid saepe rerum sunt! Voluptatum quaerat modi, voluptate,
        perferendis odio adipisci natus nostrum hic quibusdam porro, sapiente
        ipsam cupiditate assumenda ea. Explicabo fugiat facere vitae dolorum
        illum dolor commodi ullam voluptates facilis officiis maiores sapiente,
        tempora earum distinctio quasi voluptate.
      </p> */}
        <img className="image" src="https://picsum.photos/200" alt="" />
        <h1 className="name">
          {user.first_name} {user.last_name},{' '}
          {currentYear - user.birthdate.slice(0, 4)}
        </h1>
        <h2 className="sport">Basketball 🏀</h2>
        <h2 className="location">
          {user.city}, {user.zipcode}
        </h2>
        <p className="bio">{user.bio}</p>
      </div>
    )
  );
};

export default UserProfile;
