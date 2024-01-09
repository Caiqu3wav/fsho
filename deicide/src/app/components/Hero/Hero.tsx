import Image from "next/image";
import fshoLogo from "../../../assets/img/fsho_logo.png"
import arrowDown from "../../../assets/img/seta_branca.png"
import "./Hero.css"

export default function Hero() {
    return(
        <div className="main_home">
        <div className="overlay">
        <Image src={fshoLogo} alt="" className="fsho_logo_home"/>
         <p className="fsho_description">Artista/produtor brasileiro focado em música trap, <br/>
              buscando inovar sem limitações cada <br/>
               vez mais trazendo produções <br/>
                de diversos estilos/vibes <br/>
                 contribuindo para a <br/>
                  evolução e modernidade da expressão <br/>
                 artística e músical.
         </p>
        </div>
         <h1 className="cat_play_home mt-10">CATALOGO E PLAYLIST</h1>
     <button><Image src={arrowDown} alt="" className="arrow_home w-7 mt-10 animated-arrow border-none"/></button>   
 </div>
    )
}