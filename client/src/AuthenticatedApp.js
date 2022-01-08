import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import { Navbar } from "./components/Navbar";
import Profile from "./containers/Profile";
import Journals from "./containers/JournalsPage";
import PagesPage from "./containers/PagesPage";
import AboutPage from "./containers/AboutPage";
import Editor from "./components/Editors/Editor";
import PageEditor from "./components/Editors/PageEditor";
import EditProfile from "./components/Editors/EditProfile";
import FriendsPage from "./containers/FriendsPage";
import FRIEND_PAGES from "./components/Friends/Friend-Pages";
import FRIEND_JOURNALS from "./components/Friends/Friend-Journals";
// import Error404 from "./containers/Error404";

const Auth = ({ setCurrentUser, currentUser }) => {
  return (
    <div className="">
      <Router>
        <Navbar setCurrentUser={setCurrentUser} currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<Home currentUser={currentUser} />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="profile/:username" element={<Profile />} />
          <Route path="journals/:username" element={<Journals />}>
            <Route path=":id" element={<PagesPage />} />
          </Route>
          <Route path="/:username/:id/friends" element={<FriendsPage/>}>
            <Route path=":friend_id/journals" element={<FRIEND_JOURNALS/>}>
              <Route path=":journal_id" element={<FRIEND_PAGES/>}/>
            </Route>
          </Route>
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
