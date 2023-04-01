import React, { useEffect, useState } from "react";
import "./home.css";
import Blog from "../blog/Blog";
import SideCart from "../sideCart/SideCart";

const Home = ({ handleTime, readingTime }) => {
  const [blogs, setBlogs] = useState([]);
 const [counts,setCount]=useState([]);


  useEffect(() => {
    fetch("fakeDb.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  //add cart on the card section
  const handleCount = (blog) => {
   const addCard = blog;
   setCount([...counts, addCard]);
  
  };
 

  //side card
  const [time, setTime] = useState(readingTime);
  useEffect(() => {
    const getTotalTime = localStorage.getItem("readingTime");
    setTime(getTotalTime);
  }, [readingTime]);
  return (
    <div className="container main-container row m-auto mt-3">
      <div className='home-container col-md-9'>
        <div className="blogs-container row">
          {blogs.map((blog) => (
            <Blog
              handleCount={handleCount}
              handleTime={handleTime}
              blog={blog}
              key={blog.id}
            ></Blog>
          ))}
        </div>
      </div>
      <div className='home-container col-md-3 mt-4 '>
        <div className="card p-4">
          <h6>Spent time on read : {time} min</h6>
        </div>
        <div className="card p-4 mt-2 bg-secondary">
          <h6 className="bg-primary text-white p-4">Bookmarked Blogs : {counts.length}</h6>
          {
            counts.map(count=><div>
              <p className="bg-light text-dark p-1 rounded">{count.title.slice(1,40)}</p>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
