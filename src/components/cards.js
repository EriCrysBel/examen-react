
import React from "react";
import './card.css'
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Card=({imagen, piefoto, titulo, descripcion,enlace})=>{
return(
  <>
  <div className="cardexamen">
    <h2>{titulo}</h2>
    <figure>
      <GatsbyImage image={imagen} alt={piefoto} />
    </figure>
    <p>{descripcion}</p>
    <button><Link to={enlace} style={{
      textDecoration:'none',
      color:'white'
    }}>Leer más</Link></button>
  </div>
  </>
)
}
export default Card