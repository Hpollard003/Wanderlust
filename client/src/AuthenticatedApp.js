import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthHome from "./containers/AuthHome";
import {Navbar} from "./components/Navbar"
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";


const Auth = ({setCurrentUser, currentUser}) => {
  return (
      <div>
      <Router>
      <Navbar setCurrentUser={setCurrentUser} currentUser={currentUser}/>
          <Routes>
          <Route path="*" element={<AuthHome/>} />
          </Routes>
      </Router>
    </div>
  );
};
export default Auth;