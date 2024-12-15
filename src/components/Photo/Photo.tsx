import "./Photo.scss";
import { Link } from "react-router-dom";

interface PhotoProps {
  photoId: string;
  name: string;
  imageUrl: string;
  tags: string[];
}

const Photo = ({ photoId, name, imageUrl, tags }: PhotoProps) => {
  return (
    <Link className="photo" to={`/photo-details/${photoId}`}>
      <article
        style={{
          backgroundImage: `url(${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_PORT}/images/${imageUrl})`,
        }}
        className="photo__card"
      >
        <p className="photo__name">{name}</p>
        <div className="photo__tagbar">
          <ul className="photo__taglist">
            {tags.map((tag, index) => (
              <li key={index} className="photo__tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Link>
  );
};

export default Photo;
