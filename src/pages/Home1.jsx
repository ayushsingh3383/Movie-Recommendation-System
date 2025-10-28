import MovieCard from "../components/MovieCards";
import { useState } from "react";
//all the codes are here which will be not in the main code
function Home() {
  const [searchquery, setsearchquery] = useState("");
  const movies = [
    { id: 1, title: "john wick", release_date: 2020 },
    { id: 2, title: "Terminator", release_date: 2020 },
    { id: 3, title: "Matrix", release_date: 2020 },
    { id: 4, title: "The Avengers", release_date: 2020 },
  ];
  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchquery);
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies ..."
          className="Search-Input"
          value={searchquery}
          onChange={(e) => setsearchquery(e.target.value)}
        />
        <button type="submit" className="Search-button">
          Search
        </button>
      </form>
      <div className="home-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchquery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
