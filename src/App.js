import { Route, Routes } from "react-router-dom";
import AddReview from "./features/reviews/AddReview";
import EditReview from "./features/reviews/EditReview";
import ReviewList from "./features/reviews/ReviewList";

import Navbar from "./components/Navbar";
import "./App.css"


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="header__h1">REVIEW SITE</h1>

      <Routes>
        <Route path="/" element={<ReviewList />} />
        <Route path="/add-review" element={<AddReview />} />
        <Route path="/edit-review/:id" element={<EditReview />} />
      </Routes>

      
    </div>
  );
}

export default App;