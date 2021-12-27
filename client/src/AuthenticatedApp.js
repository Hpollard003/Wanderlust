import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthHome from "./containers/AuthHome";
import {Navbar} from "./components/Navbar"
import Profile from "./components/Profile";


const Auth = ({setCurrentUser, currentUser}) => {
  return (
      <div>
      <Router>
      <Navbar setCurrentUser={setCurrentUser} currentUser={currentUser}/>
          <Routes>
          <Route path="*" element={<AuthHome/>} />
          <Route path="profile" element={<Profile/>} />
          </Routes>
      </Router>
    </div>
  );
};
export default Auth;