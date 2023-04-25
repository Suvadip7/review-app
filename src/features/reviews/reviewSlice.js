import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    addReview: (state, action) => {
      state.push(action.payload);
    },
    editReview: (state, action) => {
      const { id, name, rating } = action.payload;
      const existingReview = state.find(review => review.id === id);
      if(existingReview) {
        existingReview.name = name;
        existingReview.rating = rating;
      }
    },
    deleteReview: (state, action) => {
      const { id } = action.payload;
      const existingReview = state.find(review => review.id === id);
      if(existingReview) {
        return state.filter(review => review.id !== id);
      }
    }
  }
});

export const { addReview, editReview, deleteReview } = reviewSlice.actions;
export default reviewSlice.reducer;