import React from 'react';
import { Route, Routes } from "react-router-dom";
import RegistrationForm from './components/authentication/RegistrationForm';
import LoginForm from './components/authentication/LoginForm';
import Dashboard from './components/Ui/Dashboard';
// import Dashboard from './components/Ui/Dashboard';


const App = () => {
  // const [loggedIn, setLoggedIn] = useState(false);

  // const handleRegister = () => {
  //   setLoggedIn(true);
  // };

  // const handleLogin = () => {

  //   setLoggedIn(true);
  // };

  return (
    // <Routes>
    //   <div>
    //     <h1>User Authentication</h1>
    //     <Route path="/" element={<LoginForm/>} />
    //     {/* <Route exact path="/"> */}
    //       {/* {loggedIn ? (
    //         <Redirect to="/dashboard" />
    //       ) : ( */}
    //         {/* <Redirect to="/login" /> */}
    //       {/* )} */}
    //     {/* </Route> */}
    //     {/* <Route path="/register">
    //       <RegistrationForm onRegister={handleRegister} />
    //     </Route> */}
    //     {/* <Route path="/login">
    //       <LoginForm onLogin={handleLogin} />
    //     </Route> */}
    //     {/* <Route path="/dashboard">
    //       {loggedIn ? <Dashboard /> : <Redirect to="/login" />}
    //     </Route> */}
    //   </div>
    // </Routes>
    <Routes>
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/landingpage" element={<Dashboard/>} />
    </Routes>
  );
};

export default App;

