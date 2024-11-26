import "./Photo.scss";

const Photo = () => {
  return (
    <article className="photo">
      <div className="photo__name">Greg Hooper</div>
      <div className="photo__tagbar">
        <ul className="photo__taglist">
          <li className="photo__tag">New York</li>
          <li className="photo__tag">Bridge</li>
          <li className="photo__tag">Skyline</li>
          <li className="photo__tag">Cars</li>
        </ul>
      </div>
    </article>
  );
};

export default Photo;
