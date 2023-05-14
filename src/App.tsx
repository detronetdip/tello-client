import { Route, Routes } from "react-router-dom";
import AllPages from "./AllPages";
import Feed from "./components/feed/Feed";
import AuthPage from "./views/AuthPage";
import HomePage from "./views/HomePage";
import MessagePage from "./views/MessagePage";
import NotificationPage from "./views/NotificationPage";
import ProfilePage from "./views/ProfilePage";
import Settings from "./views/Settings";
import ViewPost from "./views/ViewPost";
import UserDetails from "./views/UserDetails";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllPages />}>
          <Route path="/" element={<HomePage />}>
            <Route index element={<Feed />} />
            <Route path="notification" element={<NotificationPage />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="/messages" element={<MessagePage />} />
          <Route path="myprofile" element={<ProfilePage />} />
          <Route path="/post/:id" element={<ViewPost />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
