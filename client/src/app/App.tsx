import Landing from '../pages/Landing/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import MainPage from '../pages/MainPage/MainPage';
import './App.scss';
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/sideKick" element={<MainPage />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </UserProvider>
  );
}

export default App;
