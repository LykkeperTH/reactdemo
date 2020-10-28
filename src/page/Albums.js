/* eslint-disable react-hooks/exhaustive-deps */
import Album from "../components/user/Album";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Albums = () => {
  const params = useParams();
  const [albums, setAlbums] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    getAlbumByUserId();
  }, []);
  const getAlbumByUserId = async () => {
    const res = await axios(
      `https://jsonplaceholder.typicode.com/users/${params.userId}/albums`
    );
    const albumsResult = res.data;
    setAlbums(albumsResult);
    setLoading(false);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {albums.map((album) => {
        return <Album album={album} key={album.id} />;
      })}
    </div>
  );
};
export default Albums;
