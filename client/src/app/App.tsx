import Landing from "../pages/Landing"
import Register from "../pages/Register"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
    <Route path = "/login" element={<Landing />}/>
    <Route path = "/register" element={<Register />}/>
      </Routes>
    </Router>
  )
}

export default App
