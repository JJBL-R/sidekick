import Landing from "../pages/Landing/Landing"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from "../pages/MainPage/MainPage";

import './App.scss';


function App() {
  return (
    <Router>
      <Routes>
    <Route path = "/" element={<Landing />}/>
    <Route path = "/sideKick" element={<MainPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
