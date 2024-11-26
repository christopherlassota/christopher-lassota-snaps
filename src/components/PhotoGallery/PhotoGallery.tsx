import "./PhotoGallery.scss";
import Photo from "../Photo/Photo";
import photos from "../../data/photos.json";

const PhotoGallery = () => {
  return (
    <section className="photogallery">
      {photos.map((photo) => (
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
