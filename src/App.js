import React from "react"
import Activate from "./components/Activate/Activate"
import HeaderMobile from "./components/Header/HeaderMobile"
import HeaderDesktop from "./components/Header/HeaderDesktop"
import usePointbreak from "./hooks/usePointbreak"
import RowScreen from "./screens/RowScreen"

import requests from "./services/requests"

function App() {

    // usepointbreak
    const { width } = usePointbreak();
    const breakpoint = 800;

    return (
        <div className="app">

            <Activate />
            {width < breakpoint ? <HeaderMobile /> : <HeaderDesktop />}

            <div>
                <RowScreen
                    title="TENDENCIAS"
                    fetchUrl={requests.fetchTrending}
                />

                <RowScreen
                    title="TU PELI DE TARDE"
                    fetchUrl={requests.fetchRomance}
                />

                <RowScreen
                    title="TOP 20 SERIES EN ESPAÑA "
                    fetchUrl={requests.fetchTopseries}
                />

                <RowScreen
                    title="THRILLERS QUE TE MANTENDRÁN EN TENSION"
                    fetchUrl={requests.fetchThrillers}
                />

                <RowScreen
                    title="LA SELECCIÓN DEL EDITOR: MEJORES COMEDIAS"
                    fetchUrl={requests.fetchComedy}
                />

                <RowScreen
                    title="CINE EN FAMILIA"
                    fetchUrl={requests.fetchFamily}
                />

                <RowScreen
                    title="VIAJA A OTRA DIMENSIÓN"
                    fetchUrl={requests.fetchScify}
                />
            </div>
        </div>
    );
}

export default App;
