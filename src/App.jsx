import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SigninForm from "./auth/forms/SigninForm";
import Home from "./root/pages/Home";
import SignupForm from "./auth/forms/SignupForm";
import AuthLayout from "./auth/AuthLayout";
import RootLayout from "./root/RootLayout";
import { useAppContext } from "./context/AppContext";
import NotFound from "./root/pages/NotFound";
import Explore from "./root/pages/Explore";
import Saved from "./root/pages/Saved";
import AllUsers from "./root/pages/AllUsers"
import CreatePost from "./root/pages/CreatePost"
import EditPost from "./root/pages/EditPost"
import PostDetails from "./root/pages/PostDetails"
import Profile from "./root/pages/Profile"
import UpdateProfile from "./root/pages/UpdateProfile"
import { Toaster } from "react-hot-toast";

const App = () => {

  const {userLogged}= useAppContext()

  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-up" element={<SignupForm />} />
          <Route path="/sign-in" element={<SigninForm />} />
        </Route>

        <Route element={userLogged ? <RootLayout /> : <Navigate to={"/sign-in"}/>}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/saved" element={<Saved/>}/>
          <Route path="/all-users" element={<AllUsers/>}/>
          <Route path="/create-post" element={<CreatePost/>}/>
          <Route path="/update-post/:id" element={<EditPost/>}/>
          <Route path="/posts/:id" element={<PostDetails/>}/>
          <Route path="/profile/:id/*" element={<Profile/>}/>
          <Route path="/update-profile/:id" element={<UpdateProfile/>}/>

          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
      
      <Toaster/>
    </main>
  );
};

export default App;
