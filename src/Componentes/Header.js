import React from "react"


class Header extends React.Component{
    render(){
        return(
            <header>
            <div className="contenedor" >
                <img className ="Logotipo" src="./Imagenes/Logo.png" alt="LogoAnnuar"/>
                <nav>
                    <a href="#" >Inicio</a>
                    <a href="#" >Cartelera</a>
                </nav>
            </div>
        </header>
        );
    }
}

export default Header;