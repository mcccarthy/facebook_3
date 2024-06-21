import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Profile from './pages/profile';
import Home from './pages/home';

function App() {
  <Routes>
    <Route path="/login" element={<Login />} exact />
    <Route path="/profile" element={<Profile />} />
    <Route path="/" element={<Home />} />
  </Routes>


}

export default App;
