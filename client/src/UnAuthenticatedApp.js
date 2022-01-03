import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UnAuthHome from "./containers/UnAuthHome";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import {Navbar} from "./components/Navbar"
import Profile from "./containers/Profile";
import Journals from "./containers/JournalsPage";
import PagesPage from "./containers/PagesPage";
import AboutPage from "./containers/AboutPage";


const UnAuth = ({setCurrentUser}) => {
  return (
    <div>
      <Router>
      <Navbar setCurrentUser={setCurrentUser}/>
          <Routes>
          <Route path="/" element={<UnAuthHome/>} />
          <Route path="signup" element={<SignUp setCurrentUser={setCurrentUser}/>} />
          <Route path="login" element={<Login setCurrentUser={setCurrentUser}/>} />
          <Route path="about" element={<AboutPage/>} />
          <Route path="*" element={<UnAuthHome/>} />
          </Routes>
      </Router>
    </div>
  );
};
export default UnAuth;