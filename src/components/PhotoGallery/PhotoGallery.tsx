import "./PhotoGallery.scss";
import Photo from "../Photo/Photo";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

interface PhotoGalleryProps {
  selectedTag: string;
}

interface photoData {
  id: string;
  photographer: string;
  photo: string;
  tags: string[];
}

const PhotoGallery = ({ selectedTag }: PhotoGalleryProps) => {
  /**
   * Get photoData from api instead of JSON
   */

  const [photoData, setPhotoData] = useState<photoData[]>([]);
  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get(
        "https://unit-3-project-c5faaab51857.herokuapp.com/photos/?api_key=a90b1dab-b8ae-4277-9879-c9bcfe3201c3"
      );
      setPhotoData(response.data);
    };
    fetchPhotos();
  }, []);

  let filteredPhotos = [];
  /**
   * if selected tag is an empty string
   * filter through photosData and fill filteredPhotos
   * with objects that include the selected tag
   */

  selectedTag !== ""
    ? (filteredPhotos = photoData.filter((photo) => {
        return photo.tags.includes(selectedTag);
      }))
    : (filteredPhotos = photoData); // if no tag selected filteredPhotos filled with all objects

  return (
    <section className="photogallery">
      {filteredPhotos.map((photo) => (
        <Photo
          key={photo.id}
          photoId={photo.id}
          name={photo.photographer}
          imageUrl={photo.photo}
          tags={photo.tags}
        />
      ))}
    </section>
  );
};

export default PhotoGallery;
