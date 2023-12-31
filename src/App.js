import React,{useState} from 'react';
import { Route, Routes ,Navigate} from "react-router-dom";
import RegistrationForm from './components/authentication/RegistrationForm';
import LoginForm from './components/authentication/LoginForm';
import Home from './components/Ui/Dashboard';
import CartDetails from './components/Ui/CartDetails';
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleRegister = () => {
    setLoggedIn(true);
  };
  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <>
   
    <Routes>
      
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/" element={loggedIn ? <Navigate to="/landingpage" /> : <LoginForm />} />
      {/* {loggedIn ? ( */}
        <Route path="/landingpage" element={<Home />} />
        <Route  path='/cart' element={<CartDetails />}/>
      {/* ) : ( */}
        {/* <Navigate to="/" /> */}
      {/* )} */}
    </Routes>
    </>
    
  );
};

export default App;

