import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./containers/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";


const UnAuth = ({setCurrentUser}) => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" >
            <Login setCurrentUser={setCurrentUser}/>
          </Route>
          <Route exact path="/signup">
            <SignUp setCurrentUser={setCurrentUser}/>
          </Route>
          <Route exact path="*" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
};
export default UnAuth;