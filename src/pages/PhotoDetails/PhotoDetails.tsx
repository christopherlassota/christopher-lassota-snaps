import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./PhotoDetails.scss";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const PhotoDetails = () => {
  interface PhotoData {
    photographer: string;
    photo: string;
    tags: string[];
  }

  const params = useParams();
  const [photoData, setPhotoData] = useState({
    photographer: "",
    photo: "",
    tags: [],
  });

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${params.id}?api_key=a90b1dab-b8ae-4277-9879-c9bcfe3201c3`
      );
      setPhotoData(response.data);
    };
    fetchPhotos();
  }, [params.id]);

  return (
    <>
    <Header />
    <article
      style={{
        backgroundImage: `url(${photoData.photo})`,
      }}
      className="photo"
    >
      <p className="photo__name">{photoData.photographer}</p>
      <div className="photo__tagbar">
        <ul className="photo__taglist">
          {photoData.tags?.map((tag, index) => (
            <li key={index} className="photo__tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
    <Footer />
    </>
  );
};

export default PhotoDetails;
