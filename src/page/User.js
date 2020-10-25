import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Profile from "../components/user/Profile";
import Post from "../components/user/Post";

const User = () => {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);
  const params = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getUser();
  }, []);
  const getPostsByUserId = async () => {
    const res = await axios(
      `https://jsonplaceholder.typicode.com/users/${params.userId}/posts`
    );
    const posts = res.data;
    setPosts(posts);
  };
  const getUser = async () => {
    const res = await axios(
      `https://jsonplaceholder.typicode.com/users/${params.userId}`
    );
    const user = res.data;
    setUser(user);
    await getPostsByUserId();
    setLoading(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="d-flex mt-3">
        <Profile user={user} />
      </div>
      {posts.map((post) => {
        return <Post user={user} post={post} key={post.id} />;
      })}
    </div>
  );
};

export default User;
