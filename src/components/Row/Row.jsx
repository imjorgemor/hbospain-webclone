import React, { useState} from 'react'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
//import RowNavbar from './RowNavbar';
import { useFetch } from '../../hooks/useFetch';


import "./row.css"

const base_url = "https://image.tmdb.org/t/p/original/"

const Row = ({ title, movies }) => {

    const [trailerUrl, setTrailerUrl] = useState("");

    //const movies = useFetch(fetchUrl);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || movie?.title || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));

                })
                .catch((error) => console.log(error));
        }
    }

    return (
        <section className="row-container">

            <div className="row-title">
                <a href="#!">
                    <span>{title}</span>
                </a>
                <div className="row-navbar">
                    {/* <RowNavbar /> */}
                </div>
            </div>

            <div className="row-previewlist">
                {
                    movies.map(movie => (

                        <div className="preview-container"
                        key={movie.id}>
                            <div
                                className="preview-card"
                            >
                                <img
                                    className="row-preview"
                                    src={`${base_url}${movie.backdrop_path}`}
                                    alt={movie.title}
                                />

                                <div className="fade-preview"
                                    onClick={() => handleClick(movie)}
                                ></div>
                            </div>
                            <div className="preview-title">
                                    {movie.title ? movie.title : movie.name}
                                </div>
                        </div>
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
