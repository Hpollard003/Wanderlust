import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthHome from "./containers/AuthHome";
import {Navbar} from "./components/Navbar"
import Profile from "./containers/Profile";
import Journals from "./containers/JournalsPage";


const Auth = ({setCurrentUser, currentUser}) => {
  return (
      <div>
      <Router>
      <Navbar setCurrentUser={setCurrentUser} currentUser={currentUser}/>
          <Routes>
          <Route path="/" element={<AuthHome/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="journals" element={<Journals/>}/>
          <Route path="*" element={<AuthHome/>} />
          </Routes>
      </Router>
    </div>
  );
};
export default Auth;