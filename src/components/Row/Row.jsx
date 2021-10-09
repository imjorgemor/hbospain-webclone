import React, { useState, useEffect } from 'react'
import axios from '../../logic/axios';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import RowNavbar from './RowNavbar';

import "./row.css"

const base_url = "https://image.tmdb.org/t/p/original/"

const Row = ({ title, fetchUrl, isFeatured, background }) => {

    const [movies, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {

        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovie(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        console.log(movie)
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || movie?.title || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));

                })
                .catch((error) => console.log(error));


            //(console.log(movie.name || movie.title))
        }

    }

    return (
        <section className="row-container">

            <div className="row-title">
                <a href="#!">
                    <span>{title}</span>
                </a>
                <div className="row-navbar">
                    <RowNavbar />
                </div>
            </div>



            <div className="row-posters">
                {
                    movies.map(movie => (
                        
                            <img
                            className="row-poster"
                            onClick={() => handleClick(movie)}
                            key={movie.id}
                            src={`${base_url}${movie.backdrop_path}`}
                            alt={movie.name}
                        />
                        
                        
                        
                        
                    ))
                }
                
            </div>
            {
                trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />
            }
        </section>
    )
}

export default Row
