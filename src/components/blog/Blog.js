import React from "react";
import authorImg from "../../assets/images/profilePic.png";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blog = ({ blog, handleTime }) => {
  console.log({ handleTime });
  const { title, author, image, date, summary, readingTime } = blog;
  return (
    <div className="col-md-6 card g-4 p-4">
      <div className="blogs-card">
        <div className="blogs-poster m-auto">
          <div className="w-100 h h-25 text-center blog-main-img">
            <img className="img-fluid d-inline w-50" src={image} alt="" />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "100%",
                }}
                src={authorImg}
                alt=""
              />
              <div>
                <h3>{author}</h3>
                <p>{date}</p>
              </div>
            </div>
            <div className="d-flex">
              <p>{readingTime} min read </p>
              <button
                onClick={() => handleTime(readingTime)}
                className="ms-2 border-0 text-primary"
              >
                <FontAwesomeIcon icon={faBookmark} />
              </button>
            </div>
          </div>
          <div>
            <h4>{title}</h4>
            <p
              style={{
                fontWeight: "bold",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              Mark As Read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
