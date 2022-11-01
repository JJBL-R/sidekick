import Landing from "../pages/Landing"
import Register from "../pages/Register"
import UserProfile from "../components/UserProfiles/UserProfile";
import Matches from "../components/Matches/Matches";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from "../components/MainPage/MainPage";


function App() {
  return (
    <Router>
      <Routes>
    <Route path = "/login" element={<Landing />}/>
    <Route path = "/register" element={<Register />}/>
    <Route path = "/userProfiles" element={<UserProfile />}/>
    <Route path = "/matches" element={<Matches />}/>
    <Route path = "/mainPage" element={<MainPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
