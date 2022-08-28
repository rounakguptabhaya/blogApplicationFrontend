import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Blog from "./Blog"
const Blogs = () => {
  const [blogs, setblogs] = useState();
  const sendRequest = async () =>{
    const res = await axios.get("https://blog-application-api.herokuapp.com/api/blog").catch(err=>console.log(err));
    const data = res.data;
    return data;
  }
  useEffect(()=>{
    sendRequest().then(data=>setblogs(data.blogs));
  },[])
  return  <div>{blogs && blogs.map((blog,index)=><Blog id={blog._id} isUser={localStorage.getItem("userId") ===blog.user._id} title={blog.title} description={blog.description} imageURL={blog.image} userName={blog.user.name} /> )}</div>
  
}

export default Blogs