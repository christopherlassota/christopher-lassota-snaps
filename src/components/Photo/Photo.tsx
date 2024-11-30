import "./Photo.scss";

interface PhotoProps {
  name: string;
  imageUrl: string;
  tags: string[];
}

const Photo = ({ name, imageUrl, tags }: PhotoProps) => {


  return (
    <article
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="photo"
    >
      <div className="photo__name">{name}</div>
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
  );
};

export default Photo;
