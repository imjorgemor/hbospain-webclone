import React from "react"
import Activate from "./components/Activate/Activate"
import HeaderMobile from "./components/Header/HeaderMobile"
import HeaderDesktop from "./components/Header/HeaderDesktop"
import NowTrending from "./components/NowTrending/NowTrending"

import Row from "./components/Row/Row"
import usePointbreak from "./hooks/usePointbreak"


import requests from "./logic/requests"


import euphoriacover from "./assets/euphoriacover.png"


function App() {

    // usepointbreak
    const { width } = usePointbreak();
    const breakpoint = 800;

    //fetching
    
    return (
        <div className="app">

            <Activate />
            {width < breakpoint ? <HeaderMobile /> : <HeaderDesktop />}
            
            <NowTrending />

            <Row
                title="PARA VER EN UN PUENTE"
                fetchUrl={requests.fetchTrending}
                isFeatured={false}
                background={null}
            />           
        </div>
    );
}

export default App;
