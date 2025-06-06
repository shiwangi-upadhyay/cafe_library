import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const ReviewForm = ({ onReviewAdded }) => {
  const userData = useSelector((state) => state.user.userData);
  const [userName, setUserName]= useState("");
  const [cafeName, setCafeName] = useState("");
  const [review, setReview] = useState("");
 // const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    /*const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = async () => {*/
      try {
        const res = await axios.post("/api/users/reviews/add", {
            userName:userData.username,
            cafeName,
            userId: userData._id,
            review,
            //image: reader.result,
        });
        console.log("Response:", res.data);
        onReviewAdded(res.data);
        setLoading(false);

        // Reset form
        setUserName("");
        setCafeName("");
        setReview("");
       // setImage(null);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    //};

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-white shadow-lg rounded-lg"
    >
      <input
        type="text"
        placeholder="Your Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="Cafe Name"
        value={cafeName}
        onChange={(e) => setCafeName(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <textarea
        placeholder="Description (max 100 words)"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        maxLength={100}
        required
        className="border p-2 w-full"
      />
      {/*<input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        required
        className="border p-2 w-full"
      />*/}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
};

export default ReviewForm;
