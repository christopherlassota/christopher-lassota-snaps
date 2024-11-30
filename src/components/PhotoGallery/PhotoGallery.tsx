import "./PhotoGallery.scss";
import Photo from "../Photo/Photo";
import photosData from "../../data/photos.json";
import { useState } from "react";

interface PhotoGalleryProps {
  selectedTag: string;
}

const PhotoGallery = ({ selectedTag }: PhotoGalleryProps) => {
  const [photos, setPhotos] = useState(photosData);

  let filteredPhotos = [];

  selectedTag !== ""
    ? (filteredPhotos = photos.filter((photo) => {
        return photo.tags.includes(selectedTag);
      }))
    : (filteredPhotos = photos);

  return (
    <section className="photogallery">
      {filteredPhotos.map((photo) => (
        <Photo
          key={photo.id}
          name={photo.photographer}
          imageUrl={photo.photo}
          tags={photo.tags}
        />
      ))}
    </section>
  );
};

export default PhotoGallery;
