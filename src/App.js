import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import About from './pages/About';
import Offers from './pages/Offers';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Header from './components/Header';

function App() {
  return (
   <>
   
  
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/forgot-password" element={<ForgotPassword /> } />
      <Route path="/about" element={<About /> } />
      <Route path="/offers" element={<Offers /> } />
      <Route path="/sign-up" element={<SignUp /> } />
      <Route path="/sign-in" element={<SignIn /> } />
      <Route path="/profile" element={<Profile /> } />
    </Routes>
    </BrowserRouter>
   
   
   </>
  );
}

export default App;
