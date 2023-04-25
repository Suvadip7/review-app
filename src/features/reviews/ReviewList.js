import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteReview } from "./reviewSlice";

const ReviewList = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(store => store.reviews);

  const handleRemoveReview = (id) => {
    dispatch(deleteReview({ id }));
  }

  // Calculating average rating
  const values = reviews.map(obj => parseInt(obj.rating));
  const sum = values.reduce((acc, num) => acc + num, 0);
  const average = (sum / values.length).toFixed(1);
  


  const renderCard = () => reviews.map(review => (
    <div key={review.id} className="container">
      <div>
        <h3>{review.name}</h3>
        <span>{"⭐".repeat(parseInt(review.rating))}</span>
      </div>
      <div>
        <Link to={`edit-review/${review.id}`}>
          <button type="button" className="btn btn-warning">Edit</button>
        </Link>
  
        <button type="button" className="btn btn-danger m-5" onClick={() => handleRemoveReview(review.id)}>Delete</button>
      </div>
    </div>
  ))

  return (
    <div className="p-1 container d-flex align-items-center flex-column">
      <Link to="/add-review"><button type="button" className="btn btn-success mb-5">+ Add review</button></Link>
      <div>
        {reviews.length ? renderCard() : <p>No Review</p>}
      </div>

      <div>
        <h2>Average rating: {average}</h2>     
      </div>
      
    </div>
  )
}

export default ReviewList