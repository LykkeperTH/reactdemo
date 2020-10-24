import React from "react";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (
    <div>
      <div>
        {user.name}
        <Link to={`user/${user.id}`}>คลิ้ก</Link>
      </div>
    </div>
  );
};
export default Card;
