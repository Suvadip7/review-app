import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import TextField from "../../components/TextField"
import NumField from "../../components/NumField"
import { editReview } from "./reviewSlice"

const EditReview = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const reviews = useSelector(store => store.reviews);
  const navigate = useNavigate();
  const existingReview = reviews.filter(review => review.id === params.id);
  const { name, rating } = existingReview[0];

  const [values, setValues] = useState({
    name,
    rating
  });

  const handleEditReview = () => {
    setValues({ name: '', rating: '' });
    dispatch(editReview({
      id: params.id,
      name: values.name,
      rating: values.rating
    }));
    navigate('/');
  }

  return (
    <div className="container">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Jhon Doe' }}
      />
      <br />
        <NumField
        label="rating"
        value={values.rating}
        onChange={(e) => setValues({ ...values, rating: e.target.value })}
      />

      <button type="button" class="btn btn-primary" onClick={handleEditReview}>Done</button>
    </div>
  )
}

export default EditReview