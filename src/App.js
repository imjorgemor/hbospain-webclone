import React, { useState, useEffect, useRef } from "react"
import Activate from "./components/Activate/Activate"
import HeaderMobile from "./components/Header/HeaderMobile"
import HeaderDesktop from "./components/Header/HeaderDesktop"
import Row from "./components/Row/Row"
import usePointbreak from "./hooks/usePointbreak"
import useInfinityAndBeyond from "./hooks/useInfinityAndBeyond"

import requests from "./services/requests"

function App() {

    // usepointbreak
    const { width } = usePointbreak();
    const breakpoint = 800;

    //infinite scroll
    const elementRef = useRef();
    const isNearScreen = useInfinityAndBeyond({ elementRef });


    return (
        <div className="app" >

            <Activate />
            {width < breakpoint ? <HeaderMobile /> : <HeaderDesktop />}

            <div className="main-sections" style={{minHeight:"100vh"}}>
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
            </div>

            <div ref={elementRef}>

            </div>

            {isNearScreen ?

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
