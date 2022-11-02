// @ts-nocheck
import React, { useEffect, useContext } from 'react';
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
import './MainPageStyles.css';

const MainPage = () => {
  const handleSwipe = () => {};

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
    <div className="mainPage">
      {/* <UserInfoForm /> */}
      <h1>sidekick</h1>
      <div className="container">
        <SwipeableList>
          <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
          >
            <UserProfile />
          </SwipeableListItem>
        </SwipeableList>
        <div className="gifContainer">
          <img className="gif" src="/client/src/assets/squad.gif"></img>
        </div>
      </div>
      {/* <Link to="/matches">
      <button id="matches">Matches</button>
    </Link> */}
    </div>
  );
};

export default MainPage;
