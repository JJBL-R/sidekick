import Landing from "../pages/Landing"
import Register from "../pages/Register"
import UserProfile from "../components/UserProfiles/UserProfile";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
    <Route path = "/login" element={<Landing />}/>
    <Route path = "/register" element={<Register />}/>
    <Route path = "/userProfile" element={<UserProfile />}
      </Routes>
    </Router>
  )
}

export default App
