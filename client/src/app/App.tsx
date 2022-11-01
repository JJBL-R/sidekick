import Landing from "../pages/Landing"
import Register from "../pages/Register"
import UserProfile from "../components/UserProfiles/UserProfile";
import Matches from "../components/Matches/Matches";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
    <Route path = "/login" element={<Landing />}/>
    <Route path = "/register" element={<Register />}/>
    <Route path = "/userProfiles" element={<UserProfile />}/>
    <Route path = "/mathces" element={<Matches />}/>
      </Routes>
    </Router>
  )
}

export default App
