import React, { useEffect, useState } from "react";
import "./home.css";
import Blog from "../blog/Blog";
import SideCart from "../sideCart/SideCart";

const Home = ({ handleTime, readingTime }) => {
  const [blogs, setBlogs] = useState([]);
  const [counts, setCount] = useState([]);

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
    <div className="container">
      <div className="main-container row m-auto mt-3">
        <div className="home-container col-md-9">
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
        <div className="home-container col-md-3 mt-4 ">
          <div className="card p-4">
            <h6>Spent time on read : {time} min</h6>
          </div>
          <div className="card p-4 mt-2 bg-secondary">
            <h6 className="bg-primary text-white p-4">
              Bookmarked Blogs : {counts.length}
            </h6>
            {counts.map((count) => (
              <div>
                <p className="bg-light text-dark p-1 rounded">
                  {count.title.slice(1, 40)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 border rounded ps-5 pe-5 pt-3 pb-3">
        <div>
          <h3 className="text-primary text-center pb-3">Question and Answer</h3>
          <div>
            <h5>1. What is the different between props and state</h5>
            <p>
              Answer:- props : props used for passing data from parent component
              to child component <br></br>
           state : state used for store the data and it may change
              over time
            </p>
          </div>
          <div>
            <h5>2. How does useState works in react js</h5>
            <p>
              Answer:- The useState hook is a react js hook, we can pass any
              value in useState and it always return two value one is current
              state value and another is a function{" "}
            </p>
          </div>
          <div>
            <h5>3. what does useEffect do beside of data loading</h5>
            <p>
              Answer:-The useEffect is hook react hook, Usually we used it for
              fetching data from API but beside of data load we also can use it
              for updating the browser's title, or setting up event listeners.
              The useEffect hook allows you to perform such side effects and
              manage their lifecycle within a component
            </p>
          </div>

          <div>
            <h5>4. How does react works</h5>
            <p>
             Answer:- When a component's state or props change, React re-renders the
              component and updates the virtual DOM. React then calculates the
              minimum set of changes required to update the actual DOM,
              minimizing the number of updates required for better performance.
              React also provides event handlers for user interactions like
              button clicks and form submissions. When an event occurs, React
              updates the component's state or triggers a prop function, causing
              the component to re-render with the new data. React also provides
              lifecycle methods for performing side effects or cleaning up
              resources when a component is added or removed from the DOM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
