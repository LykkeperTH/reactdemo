import React from "react";

const Post = ({ post, user }) => {
  return (
    <div className="container-post mg-8p">
      <img
        src="https://pbs.twimg.com/profile_images/1289209780670586881/iR37XzeU.jpg"
        alt="Avatar"
      />
      <p>
        <span>{user.name}</span>
        {post.title}
      </p>
      <p>{post.body}</p>
    </div>
  );
};
export default Post;
