import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ user }) => {
  return (
    <div className="card-profile ">
      <img
        className="w-100 "
        src="https://www.meecapital.co.th/wp-content/uploads/2019/06/img_avatar.png"
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
      <Link to={`/user/${user.id}/albums`}>More albums...</Link>
    </div>
  );
};
export default Profile;
