import { SyntheticEvent, useState } from "react";
import "./CommentForm.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

const CommentForm = () => {
  const params = useParams();
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const postComment = async (comment: { name: string; comment: string }) => {
    try {
      const response = await axios.post(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${params.id}/comments?api_key=a90b1dab-b8ae-4277-9879-c9bcfe3201c3`,
        comment,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Comment posted successfully:", response.data);
    } catch (error) {
      console.log("Failed to post comment:", error);
    }
  };

  const handleFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    postComment(formData);
    setFormData({ name: "", comment: "" });
  };

  return (
    <section className="new-comment">
      <form
        action="submit"
        className="new-comment__form"
        onSubmit={handleFormSubmit}
      >
        <label htmlFor="" className="new-comment__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          className="new-comment__name"
          onChange={handleInputChange}
        />
        <label htmlFor="" className="new-comment__label">
          Comment
        </label>
        <textarea
          name="comment"
          value={formData.comment}
          className="new-comment__text"
          onChange={handleInputChange}
        />
        <button type="submit" className="new-comment__button">Submit</button>
      </form>
    </section>
  );
};

export default CommentForm;
