import React, { useState } from "react";
import "./App.css";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Le cristal magique",
      rate: 3,
      description:
       "Latte n’est pas un petit hérisson ordinaire ! Elle déborde d’énergie et d’une imagination presque trop vive. Un jour, les animaux ...",
      posterurl:
      'https://image.tmdb.org/t/p/w185/dGxUijZeGOiA7FN6tDxBpZWvpwY.jpg'
     
    },
    {
      title: "La Reine des neiges",
      rate: 5,
      description:
        "Elsa, Anna, Kristoff, Olaf et Sven voyagent bien au-delà des portes d’Arendelle à la recherche de réponses sur le passé d’Elsa. Cette dernière...",
      posterurl:
      'https://image.tmdb.org/t/p/w185/6zbuHXiuCdHZ57fZOlfUknpzCjU.jpg',
    },
    {
      title: "La Grande Aventure des Mojicons 2",
      rate: 2,
      description:
        "Moji et Brainpot embarquent pour une aventure inédite ! Le virus Mydoom...",
      posterurl:
      'https://image.tmdb.org/t/p/w185/duaLZVCTrDOsqCoCNdvElf9d5vB.jpg',
    },
    {
      title: "Leo Da Vinci",
      rate: 4,
      description:
     " Leo Da Vinci est un jeune inventeur vivant en Italie à la fin du Moyen-Âge, avec ses amis Lorenzo et la belle Lisa,...",
      posterurl:
      'https://image.tmdb.org/t/p/w185/1D0yvcGux9XGMQ1s6U9KwvTImPc.jpg',
    },
    {
      title: "Bigfoot Junior",
      rate: 3,
      description:
        "Adam, un adolescent rêveur et solitaire, doté de pouvoirs surnaturels, décide de partir à la recherche de son père...",
      posterurl:
      'https://wwv.bonstreaming.com/wp-content/uploads/2017/12/1513002428_yctlz.jpg',
    },
  ]);
  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;