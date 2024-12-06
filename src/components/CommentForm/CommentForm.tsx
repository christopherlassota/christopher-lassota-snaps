import "./CommentForm.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const CommentForm = () => {
  const params = useParams();
  useEffect(() => {
    const postComment = async (comment) => {
      try {
        const response = await axios.post(
          `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${params.id}/comments?api_key=a90b1dab-b8ae-4277-9879-c9bcfe3201c3`,
          comment,
          { headers: { "Content-Type": "application/json" } }
        );
      } catch (error) {
        console.log("Failed to post comment:", error);
      }
    };
  });

  return (
    <section className="comments">
      <form action="submit" className="comments__form">
        <input type="text" className="comments__name" />
        <textarea type="text" className="comment__new-comment" />
        <button className="comment__submit">Submit</button>
      </form>
    </section>
  );
};

export default CommentForm;
