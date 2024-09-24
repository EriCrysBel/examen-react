
import React from "react";
import './card.css'
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
const Card=()=>{
return(
  <>
  <div className="cardexamen">
    <figure>
      <StaticImage src='../images/logoPN.png' alt='Logotipo' />
    </figure>
    <h2>Logotipo Patrimonio Nacional</h2>
    <p>Este es el logo distintivo de la institución</p>
    <button><Link to='https://www.patrimonionacional.es/'style={{
      textDecoration:'none',
      color:'white'
    }}>Leer más</Link></button>
  </div>
  </>
)
}
export default Card