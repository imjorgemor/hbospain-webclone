import React from 'react'
import Alert from '../../assets/alert.svg'
import "./activate.css"


const Activate = () => {
    return (
        <aside className="reactivate-container">

            <div className="main-text">
                <div className="alert">
                    <img src={Alert} alt=""  />
                </div>
                <p className="alert-text">Reactiva tu suscripción hoy y vuelve a tener acceso a las mejores series online.</p>
            </div>

            <div className="link-container">
                <a href="#!" className="reactivate-link">REACTIVAR</a>
            </div>
        </aside>
    )
}

export default Activate
