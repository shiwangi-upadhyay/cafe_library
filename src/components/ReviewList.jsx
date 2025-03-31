import { useEffect, useState } from "react";

const ReviewList = () =>{
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async() =>{
            try{
                const response = await fetch("/api/users/reviews");
                const data = await response.json();
                setReviews(data.reviews);
                console.log(data.reviews);
            }
            catch(error){
                console.error("Error fetching reviews:", error);
            }
        }
        fetchReviews();
    }, []);

    return(
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
                <div key={review._id} className="border rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-bold">{review.userName} - {review.cafeName}</h3>
                <p>{review.description}</p>
                <img src={review.photoUrl} alt="review" className="w-full h-40 object-cover mt-2 rounded-lg" />
            </div>
        ))}
    </div>
    )
}

export default ReviewList;