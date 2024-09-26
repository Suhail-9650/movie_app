import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Link} from "react-router-dom"
import "./Home.css"
import MovieList from "../Components/MovieList";


function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  const fetchData = async () => {
    try {
      const {data} = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      );
      setPopularMovies(data.results)
      console.log(data.results)
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div>
      <div className="poster">
        <Carousel 
        showThumbs={false}
        autoPlay={true}
        transitionTime={2}
        infiniteLoop={true}
        showStatus={false}
        >
            {
                        popularMovies.map(movie => (
                            <Link key={movie.id} style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{ movie.original_title}</div>
                                    <div className="posterImage__runtime">
                                        {movie.release_date}
                                        <span className="posterImage__rating">
                                            {movie.vote_average}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie.overview}</div>
                                </div>
                            </Link>
                        ))
                    }
            </Carousel>
          <MovieList/>
      </div>
    </div>
  );
}

export default Home;
