import "../css/Fav.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCards";
function Fav(){
    const {favorites}=useMovieContext()

    if(favorites){
        return <div className="favorites">
            <h2>Your Favorites</h2>
            <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        </div>
    }
    else{    return <div className="favorites-empty ">
        <h2>No Favorite movies yet</h2>
        <p>start adding movies and they will appear here</p>
    </div>}

}

export default Fav