import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PhotoDetails.scss";
import axios from "axios";
import Header from "../../components/Header/Header";
import Details from "../../components/Details/Details";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentSection from "../../components/CommentSection/CommentSection";
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
    timestamp: 0,
  });

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/photos/${params.id}`
        );
        setPhotoData(response.data);
      } catch (error) {
        console.log("Failed to fetch photos", error);
      }
    };
    fetchPhotos();
  }, [params.id]);

  return (
    <>
      <Header
        filterClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        filterMenuToggle={false}
      />
      <Details
        imageUrl={photoData.photo}
        name={photoData.photographer}
        tags={photoData.tags}
        likes={photoData.likes}
        date={photoData.timestamp}
      />
      <CommentForm />
      <CommentSection />
      <Footer />
    </>
  );
};

export default PhotoDetails;
