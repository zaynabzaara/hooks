import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const MovieList = ({ movies }) => {
  const [search, setSearch] = useState("");
  const [star, setStar] = useState(1);
  const [addmovie, setAddmovie] = useState({
    title: "",
    rate: "",
    description: "",
    posterurl: "",
  });
  const [show, setShow] = useState(false);

  const [listMovies, setlistMovies] = useState([]);
  const handleMovie = (e) => {
    setAddmovie({ ...addmovie, [e.target.name]: e.target.value });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addNewMovie = () => {
    setlistMovies([...listMovies, addmovie]);
    setAddmovie({
      title: "",
      rate: 0,
      description: "",
      posterurl: "",
    });
    setShow(false);
  };
  movies = [...movies, ...listMovies];

  return (
    <div>
      <div>
        <div>
          <Button variant="warning" onClick={handleShow}>
            Add a Movie
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add a Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label>Title</label>
              <br />
              <input
                value={addmovie.title}
                type="text"
                name="title"
                placeholder="Enter The Title"
                onChange={handleMovie}
              />
              <br />
              <label>Description</label>
              <br />
              <input
                value={addmovie.description}
                name="description"
                type="text"
                placeholder="Enter The Description"
                onChange={handleMovie}
                maxlength="142"
              />
              <br />
              <label>Poster Url</label>
              <br />
              <input
                value={addmovie.posterurl}
                type="text"
                name="posterurl"
                placeholder="Enter The Poster Url"
                onChange={handleMovie}
              />
              <br />
              <label>Rate</label>
              <br />
              <input
                value={addmovie.rate}
                type="number"
                name="rate"
                max="5"
                min="1"
                placeholder="Enter The Rate"
                onChange={handleMovie}
              />
              <br />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" onClick={addNewMovie}>
                Add The Movie
              </Button>
            </Modal.Footer>
          </Modal>
          <div />
        </div>
      </div>
      <Search search={setSearch} star={star} setStar={setStar} />
      <div className="container">
        {movies
          .filter(
            (el) =>
              el.title.toUpperCase().includes(search.toUpperCase().trim()) &&
              el.rate >= star
          )
          .map((el) => (
            <MovieCard movie={el} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;