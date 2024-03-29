import React from "react";
import BlogPost from "./BlogPost";
import postApi from "./makingObjects/PostApi";
import numbers from "./makingObjects/keynumbers";
function BlogList(props) {
  //   const numbers = ["1", "2", "3", "4", "5"];
  //   console.log(props);
  return (
    <div className={props.className}>
      {postApi.map(function(postData, nums) {
        let keys = numbers[nums];
        console.log(keys);
        return (
          <BlogPost
            className="blogPost"
            href="#"
            key={keys}
            title={postData.title}
            subtitle={postData.subTitle}
            author={postData.author}
            date={postData.date}
            aClassName={"hoverblue"}
          />
        );
      })}
      <div className="btn">
        <button className="btnwrap">
          <a href="top">Older Posts →</a>
        </button>
      </div>
    </div>
  );
}
export default BlogList;
