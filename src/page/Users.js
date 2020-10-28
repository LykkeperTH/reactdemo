import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Card from "../components/user/Card";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/users");
    const users = res.data;
    setUsers(users);
    setLoading(false);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="d-flex flex-wrap content-center">
      {users.map((user) => {
        return <Card key={user.id} user={user} />;
      })}
    </div>
  );
};
export default Users;
