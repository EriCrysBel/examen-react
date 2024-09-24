import * as React from "react"
import { Link } from "gatsby"


const NavBar = () => {
  return (
    <>
        <nav>
            <ul style={{display:'flex'}}>
                <li style={{margin:'1em'}}><Link to="/">Inicio</Link></li>
                <li style={{margin:'1em'}}><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default NavBar
