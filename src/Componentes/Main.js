import React from "react";

class Main extends React.Component{
    render(){
        return(
            <main>
            <section>
               <div className="peliculas">
                  <div className="contenedor">
                     <h3 className="titulo">Top Gun: Maverick</h3>
                     <a className="boton" href="https://www.youtube.com/watch?v=zzBIzYmxatU" target="_blank">Trailer</a>
                     <a className="boton" href="https://www.themoviedb.org/movie/361743-top-gun-maverick?language=es" target="_blank">Mas..</a>
                  </div>
              </div>
             </section>
             <section>
                 <div className="pelicula">
                     <div className="contenedor">
                         <h3 className="titulo">Jurassic World: Dominion</h3>
                         <a className="boton" href="https://www.youtube.com/watch?v=RJ4b1ZQxPmE" target="_blank">Trailer</a>
                         <a className="boton" href="https://www.themoviedb.org/movie/507086-jurassic-world-dominion?language=es" target="_blank">Mas..</a>
                     </div>
                 </div>
             </section>
             <section>
                 <div className="dragonball">
                     <div className="contenedor">
                         <h3 className="titulo">Dragon Ball Super: Super Hero</h3>
                         <a className="boton" href="https://www.youtube.com/watch?v=lXLPVQ-WrU4" target="_blank">Trailer</a>
                         <a className="boton" href="https://www.themoviedb.org/movie/610150?language=es" target="_blank">Mas..</a>
                     </div>
                 </div>
             </section>
             <section>
                 <div className="sp">
                     <div className="contenedor">
                         <h3 className="titulo">Spider-Man: No Way Home</h3>
                         <a className="boton" href="https://www.youtube.com/watch?v=r6t0czGbuGI" target="_blank">Trailer</a>
                         <a className="boton" href="https://www.themoviedb.org/movie/634649-spider-man-no-way-home?language=es" target="_blank">Mas..</a>
                     </div>
                 </div>
             </section>
             <section>
                 <div className="your">
                     <div className="contenedor">
                         <h3 className="titulo">Your Name</h3>
                         <a className="boton" href="https://www.youtube.com/watch?v=NooIc3dMncc" target="_blank">Trailer</a>
                         <a className="boton" href="https://www.themoviedb.org/movie/372058?language=es" target="_blank">Mas..</a>
                     </div>
                 </div>
             </section>
         </main>
        );
    }
}

export default Main;