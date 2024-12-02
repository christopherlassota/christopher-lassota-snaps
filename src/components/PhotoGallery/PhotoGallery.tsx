import "./PhotoGallery.scss";
import Photo from "../Photo/Photo";
import photosData from "../../data/photos.json";

interface PhotoGalleryProps {
  selectedTag: string;
}

const PhotoGallery = ({ selectedTag }: PhotoGalleryProps) => {
  let filteredPhotos = [];
  /**
   * if selected tag is an empty string
   * filter through photosData and fill filteredPhotos
   * with objects that include the selected tag
   */

  selectedTag !== ""
    ? (filteredPhotos = photosData.filter((photo) => {
        return photo.tags.includes(selectedTag);
      }))
    : (filteredPhotos = photosData); // if no tag selected filteredPhotos filled with all objects

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
