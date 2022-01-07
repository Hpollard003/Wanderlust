import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import {Navbar} from "./components/Navbar"
import AboutPage from "./containers/AboutPage";
import Error404 from "./containers/Error404";


const UnAuth = ({setCurrentUser}) => {
  return (
    <div>
      <Router>
      <Navbar setCurrentUser={setCurrentUser}/>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="signup" element={<SignUp setCurrentUser={setCurrentUser}/>} />
          <Route path="login" element={<Login setCurrentUser={setCurrentUser}/>} />
          <Route path="about" element={<AboutPage/>} />
          <Route path="*" element={<Error404/>} />
          </Routes>
      </Router>
    </div>
  );
};
export default UnAuth;