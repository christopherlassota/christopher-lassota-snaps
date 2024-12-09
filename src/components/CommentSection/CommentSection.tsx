import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CommentSection.scss";

const CommentSection = () => {
  const [commentData, setCommentData] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${params.id}/comments?api_key=a90b1dab-b8ae-4277-9879-c9bcfe3201c3`
        );
        const commentsResponse = response.data;
        setCommentData(
          commentsResponse.sort((a: any, b: any) => b.timestamp - a.timestamp)
        );
      } catch (error) {
        console.log("Failed to fetch comments", error);
      }
    };
    fetchComments();
  });

  return (
    <section className="comment">
      <h3 className="comment__count">
        {commentData.length}{" "}
        {`${commentData.length === 1 ? "Comment" : "Comments"}`}
      </h3>
      {commentData.map(({ name, comment, timestamp }, index) => (
        <div key={index} className="comment__card">
          <ul className="comment__info-bar">
            <li className="comment__info">{name}</li>
            <li className="comment__info">
              {new Date(timestamp).toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </li>
          </ul>
          <p className="comment__text">{comment}</p>
        </div>
      ))}
    </section>
  );
};

export default CommentSection;
