import MovieCard from "../components/MovieCards";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { SearchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchquery, setsearchquery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const LoadPopularMovies = async () => {
      try {
        const PopularMovies = await getPopularMovies();
        setMovies(PopularMovies);
      } catch (err) {
        console.log(err);
        seterror("Failed to load movies...");
      } finally {
        setloading(false);
      }
    };

    LoadPopularMovies();
  }, []); //we are doing this so that are movies do not re render every time any component changes . If dependency array is empty that means the component will render only once

  //const movies = [
  //  { id: 1, title: "john wick", release_date: 2020 },
  //  { id: 2, title: "Terminator", release_date: 2020 },
  //  { id: 3, title: "Matrix", release_date: 2020 },
  //  { id: 4, title: "The Avengers", release_date: 2020 },
  //];

  const handleSearch = async(e) => {
    e.preventDefault();
    if(!searchquery.trim()) return
    if(loading) return

    setloading(true)
    try{
      const searchResults=await SearchMovies(searchquery)
      setMovies(searchResults)
      seterror(null)
    }catch(err){
      console.log(err)
      seterror('Failed to load movies...')
    }finally{
      setloading(false)
    }
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
      
      {error &&  <div className="error-message">{error}</div>}


      {loading ? (
        <div className="loading">loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
