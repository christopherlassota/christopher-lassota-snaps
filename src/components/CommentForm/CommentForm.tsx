import { SyntheticEvent, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CommentForm.scss";

const CommentForm = () => {
  const params = useParams();
  
  // Manage form input data
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });

  // Manage error state messages
  const [errors, setErrors] = useState({
    name: "",
    comment: "",
  });

  // Validate form fields
  const validateForm = () => {
    let isValid = true; // Track if form is valid
    const newErrors = { name: "", comment: "" }; 
    if (!formData.name.trim()) {  // if form is an empty string
      newErrors.name = "Name is required."; // send this error message and
      isValid = false;  // set to false if error detected
    }
    if (!formData.comment.trim()) { // same but for comment form
      newErrors.comment = "Comment is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle changes in form inputs
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> // TS event type from quick-fix, will need to investigate further
  ) => {
    const { name, value } = event.target; // Get input values
    setFormData({
      ...formData, // Copy existing form data
      [name]: value, // update field with new value
    });
  };

  // Send comment to API
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

  // Handle form submission event
  const handleFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!validateForm()) return; // Validate before submitting
    postComment(formData); // send comment to API
    setFormData({ name: "", comment: "" }); // reset form and
    setErrors({ name: "", comment: "" }); // error state after a valid submission
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
          className={`new-comment__name ${errors.name ? "new-comment__name--error" : ""}`}
          onChange={handleInputChange}
        />
        {errors.name && <p className="new-comment__error">{errors.name}</p>}
        <label htmlFor="" className="new-comment__label">
          Comment
        </label>
        <textarea
          name="comment"
          value={formData.comment}
          className={`new-comment__text ${errors.comment ? "new-comment__text--error" : ""}`}
          onChange={handleInputChange}
          />
          {errors.comment && <p className="new-comment__error">{errors.comment}</p>}
        <button type="submit" className="new-comment__button">
          Submit
        </button>
      </form>
    </section>
  );
};

export default CommentForm;
