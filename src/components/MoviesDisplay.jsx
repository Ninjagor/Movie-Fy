import Movie from "./Movie";
import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from "react";

// API KEY
// 47ef4397



const MoviesDisplay = forwardRef((props, ref) => {
    // States
    const [movies, setMovies] = useState([])

    // Variables
    const API_URL = "https://www.omdbapi.com/?apikey=47ef4397"

    // Funcs


    useImperativeHandle(ref, () => ({
        async updateMovies(title) {
        const response = await fetch(`${API_URL}&page=1&s=${title}`)
        const data = await response.json()
        let data1 = data.Search;
        const response2 = await fetch(`${API_URL}&page=2&s=${title}`)
        const data2 = await response2.json()
        let data3 = data2.Search;
        const finalData = data1.concat(data3)
        setMovies(finalData)
        }
    }));

    // JSX Output
    return (
        <>
        <main className="moviesDisplay">
        <h1 className="displayH1" style={{display: props.searchvalue ? 'block' : 'none'}}>Results for: {props.searchvalue}</h1>
            <h1 className="displayH1" style={{display: props.searchvalue ? 'none' : 'block'}}>Trending Movies</h1>
        {movies?.length > 0 ? (
            <div className="movies">
                {movies.map((movie) => (
                    <>
                    <Movie title={movie.Title ? movie.Title: null} img={movie.Poster ? movie.Poster : null} year={movie.Year ? movie.Year : null} type={movie.Type ? movie.Type: null}/>
                    </>
                ))}
            </div>
        ) : (
            <div className="movies">
                <p className="empty">No movies found... Try entering a more specific search.</p>
            </div>
        )}
        </main>
        </>
    );
})

export default MoviesDisplay;
