import "./PhotoGallery.scss";
import Photo from "../Photo/Photo";
import photosData from "../../data/photos.json";

interface PhotoGalleryProps {
  selectedTag: string;
}

const PhotoGallery = ({ selectedTag }: PhotoGalleryProps) => {
  let filteredPhotos = [];

  selectedTag !== ""
    ? (filteredPhotos = photosData.filter((photo) => {
        return photo.tags.includes(selectedTag);
      }))
    : (filteredPhotos = photosData);

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
