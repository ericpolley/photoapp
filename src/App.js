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
    <div className='flex justify-center'>
    <div className='border-4 border-b-8 pb-12 pt-6 border-t-[12px] bg-teal-700 border-teal-500 mt-12 w-[90%] md:w-[80%] p-2 rounded-2xl text-teal-100'>
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/forgot-password" element={<ForgotPassword /> } />
      <Route path="/about" element={<About /> } />
      <Route path="/offers" element={<Offers /> } />
      <Route path="/sign-up" element={<SignUp /> } />
      <Route path="/sign-in" element={<SignIn /> } />
      <Route path="/profile" element={<Profile /> } />
    </Routes>
  </div></div>
    </BrowserRouter>
   
   
   </>
  );
}

export default App;
