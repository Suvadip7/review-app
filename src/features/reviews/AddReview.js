import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import TextField from "../../components/TextField"
import NumField from "../../components/NumField";
import { addReview } from "./reviewSlice"


const AddReview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    rating: ''
  });

  const handleAddReview = () => {
    setValues({ name: '', rating: '' });
    dispatch(addReview({
      id: uuidv4(),
      name: values.name,
      rating: values.rating
    }));
    navigate('/');
  }

  return (
    <div className="container">
      <TextField
        label="Review"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Write review' }}
      />
      <br />
      <NumField 
        label="Rating"
        value={values.rating}
        onChange={(e) => setValues({ ...values, rating: e.target.value })}
      />

      <button type="button" className="btn btn-primary" onClick={handleAddReview}>Post</button>
    </div>
  )
}

export default AddReview