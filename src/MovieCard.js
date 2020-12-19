import React from "react";
import "./MovieCard.css";
import StarRatingComponent from "react-star-rating-component";
const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="card">
        <div className="imgBox">
          <img src={movie.posterurl} />
        </div>
        <div className="content">
          <h2>{movie.title}</h2>
          <h2>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={movie.rate}
            />
          </h2>
          <p>{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;