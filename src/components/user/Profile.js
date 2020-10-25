import React from "react";

const Profile = ({ user }) => {
  return (
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
  );
};
export default Profile;
