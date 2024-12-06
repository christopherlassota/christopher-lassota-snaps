import "./CommentForm.scss";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useEffect } from "react";

const CommentForm = () => {
  //   const params = useParams();
  //   useEffect(() => {
  //     const postComment = async (comment) => {
  //       try {
  //         const response = await axios.post(
  //           `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${params.id}/comments?api_key=a90b1dab-b8ae-4277-9879-c9bcfe3201c3`,
  //           comment,
  //           { headers: { "Content-Type": "application/json" } }
  //         );
  //       } catch (error) {
  //         console.log("Failed to post comment:", error);
  //       }
  //     };
  //   });

  return (
    <section className="new-comment">
      <form action="submit" className="new-comment__form">
        <label htmlFor="" className="new-comment__label">
          Name
        </label>
        <input type="text" className="new-comment__name" />
        <label htmlFor="" className="new-comment__label">
          Comment
        </label>
        <textarea type="text" className="new-comment__text" />
        <div className="new-comment__button">Submit</div>
      </form>
    </section>
  );
};

export default CommentForm;
