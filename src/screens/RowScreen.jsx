import React, { lazy, Suspense } from 'react'
import useInfinityAndBeyond from "../hooks/useInfinityAndBeyond"
import { useFetch } from '../hooks/useFetch';
import PlaceHolder from '../components/Loading/ContentLoader';

const Row = lazy(() => {

    return new Promise(resolve => {
        setTimeout(() => resolve(import("../components/Row/Row")), 1000);
    });
    
});


const RowScreen = ({ title, fetchUrl }) => {

    const { show, fromRef } = useInfinityAndBeyond();
    const movies = useFetch(fetchUrl);
    //console.log(movies)

    return (
        <div
            ref={fromRef}
            style={{ minHeight: "260px" }}
        >
            <Suspense
                fallback={<PlaceHolder />}>
                {show ? (
                    < Row
                        title={title}
                        movies={movies}
                    />
                ) : (
                    <PlaceHolder />
                )}
            </Suspense>
        </div>
    )
}

export default RowScreen
