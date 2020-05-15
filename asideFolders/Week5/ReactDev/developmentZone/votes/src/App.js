import React from "../node_modules/@types/react";
import { Switch, Route } from "../node_modules/react-router-dom";
import Navbar from "./components/Navbar.js";
import Auth from "./components/auth/auth.js";
import Profile from "./components/profile.js";
import Public from "./components/public.js";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Auth />} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/public" render={() => <Public />} />
      </Switch>
    </div>
  );
}
