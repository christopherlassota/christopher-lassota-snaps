import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./PhotoDetails.scss";
import axios from "axios";
import Header from "../../components/Header/Header";
import Details from "../../components/Details/Details";
import Footer from "../../components/Footer/Footer";

const PhotoDetails = () => {
  interface photoData {
    photographer: string;
    photo: string;
    tags: string[];
    likes: number;
    timestamp: number;
  }

  const params = useParams();
  const [photoData, setPhotoData] = useState({
    photographer: "",
    photo: "",
    tags: [],
    likes: 0,
    timestamp: 0
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
      <Details
        imageUrl={photoData.photo}
        name={photoData.photographer}
        tags={photoData.tags}
        likes={photoData.likes}
        date={photoData.timestamp}
      />
      <Footer />
    </>
  );
};

export default PhotoDetails;
