import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Photo from "../components/user/Photo";

const Photos = () => {
  const params = useParams();
  const [photos, setPhotos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    getPhotosByAlbumId();
  });
  const getPhotosByAlbumId = async () => {
    const res = await Axios(
      `https://jsonplaceholder.typicode.com/albums/${params.albumId}/photos`
    );
    const photosResult = res.data;
    setPhotos(photosResult);
    setLoading(false);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="d-flex mt-3">
      <Carousel className="photo-box ml-auto mr-auto">
        {photos.map((photo) => {
          return <Photo photo={photo} key={photo.id} />;
        })}
      </Carousel>
    </div>
  );
};

export default Photos;
