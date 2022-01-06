import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import { Navbar } from "./components/Navbar";
import Profile from "./containers/Profile";
import Journals from "./containers/JournalsPage";
import PagesPage from "./containers/PagesPage";
import AboutPage from "./containers/AboutPage";
import Editor from "./components/Editor";
import PageEditor from "./components/PageEditor";
import EditProfile from "./components/EditProfile";
import FriendsPage from "./containers/FriendsPage";

const Auth = ({ setCurrentUser, currentUser }) => {
  return (
    <div className="">
      <Router>
        <Navbar setCurrentUser={setCurrentUser} currentUser={currentUser} />
        <Routes className="main">
          <Route path="/" element={<Home currentUser={currentUser} />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="profile/:username" element={<Profile />} />
          <Route path="journals/:username" element={<Journals />}>
            <Route path=":id" element={<PagesPage />} />
          </Route>
          <Route path="/:username/friends" element={<FriendsPage/>}/>
          <Route path="journals/edit/:titleText/:id" element={<Editor />} />
          <Route path="journals/edit/:id/pages/:pageId" element={<PageEditor />} />
          <Route path="profile/edit/:user_id/:userName" element={<EditProfile />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};
export default Auth;
