import { useEffect, useState } from "react";
import axios from "axios";
import "./CommentSection.scss";
import { useParams } from "react-router-dom";

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

    const postComment = async (comment:any) => {
        try {
            const response = await axios.post(
              `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${params.id}/comments?api_key=a90b1dab-b8ae-4277-9879-c9bcfe3201c3`, comment, {
                  headers: {
                      "Content-Type": "application/json"
                  }
              }
            );
            console.log("Comment Posted")
        } catch (error) {
            console.log("Failed to post comment", error)
        }
    };
  }, [params.id]);

  return (
    <section className="comments">
      <form action="submit" className="comments__form">
        <input type="text" className="comments__name" />
        <input type="text" className="comment__new-comment" />
        <button className="comment__submit">Submit</button>
      </form>
      <article className="comments__posted">
        <h2 className="comments__count">{commentData.length} comments</h2>
        {commentData.map(({ name, comment, timestamp }, index) => (
          <div key={index} className="comments__card">
            <ul className="comments__info-bar">
              <li className="comment__info">{name}</li>
              <li className="comment__info">{timestamp}</li>
            </ul>
            <p className="comment__text">{comment}</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default CommentSection;
