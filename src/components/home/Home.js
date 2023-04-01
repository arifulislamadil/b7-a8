import React, { useEffect, useState } from "react";
import "./home.css"
import Blog from "../blog/Blog";

const Home = ({handleTime}) => {
const [blogs,setBlogs]=useState([]);
console.log(blogs);
    useEffect(()=>{
        fetch("fakeDb.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
  return (
    <div>
      <div className="blogs-container row">
        {
            blogs.map(blog=><Blog handleTime = {handleTime} blog={blog} key={blog.id}></Blog>)
        }
      </div>
    </div>
  );
};

export default Home;
