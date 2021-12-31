import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UnAuthHome from "./containers/UnAuthHome";
import Login from "./components/Login";
import SignUp from "./components/SignUp";


const UnAuth = ({setCurrentUser}) => {
  return (
    <div>
      <Router>
          <Routes>
          <Route path="/" element={<UnAuthHome/>} />
          <Route path="signup" element={<SignUp setCurrentUser={setCurrentUser}/>} />
          <Route path="login" element={<Login setCurrentUser={setCurrentUser}/>} />
          <Route path="*" element={<UnAuthHome/>} />
          </Routes>
      </Router>
    </div>
  );
};
export default UnAuth;