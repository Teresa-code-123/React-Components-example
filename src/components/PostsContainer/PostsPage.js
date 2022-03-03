//Complete the necessary code in this file
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import DummyData from "../../dummy-data";
// pass the data from App.js down as props then map through the data
const PostsPage = () => {
  const [data] = useState(DummyData);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {data.map(function (p, index) {
        return <Post key={index} post={p} />;
      })}
    </div>
  );
};

export default PostsPage;
