import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import UserProfile from '../UserProfiles/UserProfile';
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';

const MainPage = () => {

    const leadingActions = () => (
        <LeadingActions>
          <SwipeAction onClick={() => console.info('swipe action triggered')}>
            Match
          </SwipeAction>
        </LeadingActions>
      );
      
      const trailingActions = () => (
        <TrailingActions>
          <SwipeAction
            destructive={true}
            onClick={() => console.info('swipe action triggered')}
          >
            No Match
          </SwipeAction>
        </TrailingActions>
      );
      
  return (
    <div>
    <h1>Main Page</h1>
    <SwipeableList>
      <SwipeableListItem 
      leadingActions= {leadingActions()}
      trailingActions={trailingActions()}
      >
      <UserProfile/> 
      </SwipeableListItem>
    </SwipeableList>
    </div>
  )
}

export default MainPage