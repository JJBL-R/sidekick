import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserProfile from '../../components/UserProfile/UserProfile';
import UserInfoForm from '../../components/UserInfoForm/UserInfoForm';
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';
  import SwipeRight from '../../components/Swipes/SwipeRight';
  import Swipeleft from '../../components/Swipes/SwipeLeft';
  import './MainPageStyles.scss'
 
  




const MainPage = () => {
  function handleSwipe() {
    console.log('swipped');
    // fetch()
    // .then(res => res.json())
    // .then((respdata) => {

    // })
    // .catch((err) => {
    // })
  }

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction destructive={true} onClick={handleSwipe}>
        <SwipeRight />
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction destructive={true} onClick={handleSwipe}>
        <Swipeleft />
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <div className='mainPage'>
    <h1 className='sidekick'>sidekick</h1>
    <div className='container'>
      <SwipeableList>
        <SwipeableListItem 
        leadingActions= {leadingActions()}
        trailingActions={trailingActions()}
        >
        <UserProfile/> 
        </SwipeableListItem>
      </SwipeableList>
      <div className='gifContainer'>
        <img className='gif' src='/client/src/assets/squad-transparent.gif'></img>
      </div>
      <div className='backgroundimgContainer'>
        <img className='backgroundimg' src='/client/src/assets/shape.png'></img>
      </div>
      <div className='backgroundimgContainer2'>
        <img className='backgroundimg' src='/client/src/assets/shape.png'></img>
      </div>
    </div>
    {/* <Link to="/matches">
      <button id="matches">Matches</button>
    </Link> */}
    </div>
  );
};

export default MainPage;
