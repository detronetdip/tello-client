import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./views/AuthPage";
import HomePage from "./views/HomePage";
import ProfilePage from "./views/ProfilePage";
import AllPages from "./AllPages";
import Feed from "./components/feed/Feed";
import NotificationPage from "./views/NotificationPage";
import Settings from "./views/Settings";
import MessagePage from "./views/MessagePage";
import ViewPost from "./views/ViewPost";

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
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
