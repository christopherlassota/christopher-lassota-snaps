import { useEffect } from "react";
import { useState } from "react";
import "./PhotoDetails.scss";
import axios from "axios";

const PhotoDetails = () => {
  // {"api_key":"a90b1dab-b8ae-4277-9879-c9bcfe3201c3"}
  

  const [photoData, setPhotoData] = useState([])

  useEffect(() => {
    const fetchPhotos = async () => {
        const response = await axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/{$photo.id}?api_key=a90b1dab-b8ae-4277-9879-c9bcfe3201c3`);
        setPhotoData(response.data)
    }

    fetchPhotos();
  },[]);

  console.log(photoData)

  return <p>{photoData.tags}</p>;
};

export default PhotoDetails;
