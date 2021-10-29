import React, { useState, useEffect, useRef } from "react"
import Activate from "./components/Activate/Activate"
import HeaderMobile from "./components/Header/HeaderMobile"
import HeaderDesktop from "./components/Header/HeaderDesktop"
import Row from "./components/Row/Row"
import usePointbreak from "./hooks/usePointbreak"

import requests from "./logic/requests"

function App() {

    // usepointbreak
    const { width } = usePointbreak();
    const breakpoint = 800;

    //infinite scroll
    const [show, setShow] = useState(false);
    const divRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const div = divRef.current
            const { y } = (div.getBoundingClientRect());
            console.log(y);
            const showMore = y <= 900 ? true : false;
            setTimeout(() => {
                setShow(showMore)
            }, 1000);
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])


    return (
        <div className="app">

            <Activate />
            {width < breakpoint ? <HeaderMobile /> : <HeaderDesktop />}

            <Row
                title="TENDENCIAS"
                fetchUrl={requests.fetchTrending}
            />
            <Row
                title="TU PELI DE TARDE"
                fetchUrl={requests.fetchRomance}
            />
            <Row
                title="LA CUENTA ATRÁS PARA HALLOWEEN"
                fetchUrl={requests.fetchHorror}
            />

            <Row
                title="TOP 20 SERIES EN ESPAÑA "
                fetchUrl={requests.fetchTopseries}
            />

            <div ref={divRef}>

            </div>

            {show ?

                <div>
                    <Row
                        title="THRILLERS QUE TE MANTENDRÁN EN TENSION"
                        fetchUrl={requests.fetchThrillers}
                    />

                    <Row
                        title="LA SELECCIÓN DEL EDITOR: MEJORES COMEDIAS"
                        fetchUrl={requests.fetchComedy}
                    />

                    <Row
                        title="CINE EN FAMILIA"
                        fetchUrl={requests.fetchFamily}
                    />

                    <Row
                        title="VIAJA A OTRA DIMENSIÓN"
                        fetchUrl={requests.fetchScify}
                    />

                </div>

                :

                <h2 style={{ color: "white" }}>LOADING...</h2>
            }
        </div>
    );
}

export default App;
