import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import UserProfile from '../../components/UserProfiles/UserProfile';
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
  import './MainPageStyles.css'
 
  




const MainPage = () => {

    function handleSwipe () {
        console.log('swipped')
        // fetch()
        // .then(res => res.json())
        // .then((respdata) => {
            
        // })
        // .catch((err) => {
        // })
    }

    const leadingActions = () => (
        <LeadingActions>
          <SwipeAction 
          destructive={true}
          onClick={handleSwipe}>
            <SwipeRight/>
          </SwipeAction>
        </LeadingActions>
      );
      
      const trailingActions = () => (
        <TrailingActions>
          <SwipeAction
            destructive={true}
            onClick={handleSwipe}>
             <Swipeleft/>
          </SwipeAction>
        </TrailingActions>
      );
      
  return (
    <div className='mainPage'>
    <h1>sidekick</h1>
    <SwipeableList>
      <SwipeableListItem 
      leadingActions= {leadingActions()}
      trailingActions={trailingActions()}
      >
      <UserProfile/> 
      </SwipeableListItem>
    </SwipeableList>
    {/* <Link to="/matches">
      <button id="matches">Matches</button>
    </Link> */}
    </div>
  )
}

export default MainPage