import { useState, useEffect } from 'react'
import { fetchData } from '../services/fetchData';

export const useFetch = (fetchUrl) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchData(fetchUrl)
        .then(setMovies);
    }, [fetchUrl])

    return movies;
}
