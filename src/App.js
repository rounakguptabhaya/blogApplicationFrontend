import Header from "./components/Header";
import Login from "./components/Login";
import Blogs from "./components/Blogs";
import UserBlog from "./components/UserBlog";
import BlogDetails from "./components/BlogDetails";
import AddBlog from "./components/AddBlog";
import {Route,Routes} from 'react-router-dom';
import React from "react";
import { useSelector } from "react-redux";

function App() {
  const loggedIn = useSelector(state=> state.loggedIn)
  console.log(loggedIn);
  return <React.Fragment>
    <header>
      <Header />
    </header>
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myBlogs" element={<UserBlog />} />
        <Route path="/myBlogs/:id" element={<BlogDetails />} />
        <Route path="/blogs/add" element={<AddBlog />} />

      </Routes>
    </main>
  </React.Fragment>
}

export default App;
