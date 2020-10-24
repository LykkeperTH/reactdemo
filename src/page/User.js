import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const User = () => {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await axios(
      `https://jsonplaceholder.typicode.com/users/${params.userId}`
    );
    const user = res.data;
    setUser(user);
    setLoading(false);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="d-flex mt-3">
      <div className="box-card ml-auto mr-auto">
        <div>
          <b>Name</b> : {user.name}
        </div>
        <div>
          <b>Email</b> : {user.email}
        </div>
        <div>
          <b>Address</b> : {user.address.street} {user.address.suite}{" "}
          {user.address.city} {user.address.zipcode}
        </div>
        <div>
          <b>Phone</b> : {user.phone}
        </div>
        <div>
          <b>Website</b> : {user.website}
        </div>
        <div>
          <b>Company</b> : {user.company.name} {user.company.catchPhrase}{" "}
          {user.company.bs}
        </div>
      </div>
    </div>
  );
};

export default User;
