import React from "react";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (
    <div className="pd-8p">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              className="user-img "
              src="https://www.meecapital.co.th/wp-content/uploads/2019/06/img_avatar.png"
              alt="Avatar"
            />
            {user.name}
          </div>
          <div class="flip-card-back">
            <Link to={`user/${user.id}`}>
              <h2>...More</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
