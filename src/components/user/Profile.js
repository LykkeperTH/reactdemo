import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ user }) => {
  return (
    <div>
      <div className="d-flex content-center pd-8p">
        <div className="card-profile ">
          <img
            className="w-100 "
            src="https://www.emsateknik.com.tr/wp-content/uploads/2018/01/avatar-png-1.png"
            alt="Avatar"
          />
          <div class="container">
            <div>
              <b>Name</b> : {user.name}
            </div>
            <div>
              <b>Email</b> : {user.email}
            </div>
            <div>
              <b>Address</b> : {user.address.street} {user.address.suit}{" "}
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
      </div>
      <div className="d-flex content-center mg-8p">
        <Link to={`/user/${user.id}/albums`}>
          <button className="button">
            <span>More...</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Profile;
