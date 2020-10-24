import React from "react";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (
    <div>
      <div className="ln">
        {user.name}
        <Link to={`user/${user.id}`}>
          <button className="button1">Click</button>
        </Link>
      </div>
    </div>
  );
};
export default Card;
