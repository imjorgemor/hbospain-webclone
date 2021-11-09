import React, { lazy, Suspense } from 'react'
import useInfinityAndBeyond from "../hooks/useInfinityAndBeyond"
import { useFetch } from '../hooks/useFetch';
import PlaceHolder from '../components/Loading/PlaceHolder';

const Row = lazy(
    () => import("../components/Row/Row")
);


const RowScreen = ({ title, fetchUrl}) => {

    const { show, fromRef } = useInfinityAndBeyond();
    const movies = useFetch(fetchUrl);
    console.log(movies)

    
    return (
        <div
            ref={fromRef}
            style={{minHeight:"260px"}}
        >
            <Suspense
                fallback={<PlaceHolder/>}>
                {show ?
                    <Row
                        title={title}
                        movies={movies}
                    /> : null}
            </Suspense>


        </div>
    )
}

export default RowScreen
