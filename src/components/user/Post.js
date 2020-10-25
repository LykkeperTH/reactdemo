import React from "react";

const Post = ({ post, user }) => {
  const now = new Date();
  return (
    <div className="round3">
      <span>{user.name}</span>
      <br />
      <small>{`${now.getDate()}/${
        now.getMonth() + 1
      }/${now.getFullYear()}`}</small>
      <h5>{post.title}</h5>
      {post.body}
    </div>
  );
};
export default Post;
