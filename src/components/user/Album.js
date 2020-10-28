import React from "react";
import { Link } from "react-router-dom";

const Album = ({ album }) => {
  return (
    <div>
      <b>Title : </b>
      {album.title}
      {` `}
      <Link to={`/albums/${album.id}/photos`}>to Photos </Link>
    </div>
  );
};
export default Album;
