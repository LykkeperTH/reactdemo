import React from "react";

const Photo = ({ photo }) => {
  return (
    <div>
      <img src={photo.url} alt={photo.title} />
    </div>
  );
};
export default Photo;
