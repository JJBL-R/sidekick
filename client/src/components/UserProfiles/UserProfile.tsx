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
    <div>
    <SwipeableList>
      <SwipeableListItem 
      leadingActions= {leadingActions()}
      trailingActions={trailingActions()}
      >
      <Test/> 
      </SwipeableListItem>
    </SwipeableList>
      <Link to="/matches">
      <button id="matches">Matches</button>
      </Link>
    </div>
  )
}

export default UserProfile
