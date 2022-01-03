import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthHome from "./containers/AuthHome";
import { Navbar } from "./components/Navbar";
import Profile from "./containers/Profile";
import Journals from "./containers/JournalsPage";
import PagesPage from "./containers/PagesPage";
import AboutPage from "./containers/AboutPage";
import Editor from "./components/Editor";
import PageEditor from "./components/PageEditor";

const Auth = ({ setCurrentUser, currentUser }) => {
  return (
    <div>
      <Router>
        <Navbar setCurrentUser={setCurrentUser} currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<AuthHome />} />
          <Route path="profile/:username" element={<Profile />} />
          <Route path="journals" element={<Journals />}>
            <Route path=":id" element={<PagesPage />} />
          </Route>
          <Route path="journals/edit/:id" element={<Editor />} />
          <Route path="journals/edit/:id/pages/:pageId" element={<PageEditor />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<AuthHome />} />
        </Routes>
      </Router>
    </div>
  );
};
export default Auth;
